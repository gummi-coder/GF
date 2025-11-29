import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Sparkles, Users, Mail } from "lucide-react";
import SEO from "@/components/SEO";

// Configuration - Goal intensity using fixed calorie deficits/surpluses
const GOAL_INTENSITY_CONFIG = {
  lose_fat: {
    mild: { deficit: -250, label: 'Mild (~0.25 kg/klst)', description: '~0.25 kg/klst' },
    moderate: { deficit: -500, label: 'Miðlungs (~0.5 kg/klst)', description: '~0.5 kg/klst' }
  },
  build_muscle: {
    mild: { surplus: 250, label: 'Mild (~0.25 kg/klst)', description: '' },
    moderate: { surplus: 500, label: 'Miðlungs (~0.5 kg/klst)', description: '' }
  }
};

// Gender-specific macro presets
const MACRO_PRESETS = {
  female: {
    balanced: {
      protein: { target: 0.24, min: 0.15, max: 0.35 },
      carbs: { target: 0.49, min: 0.40, max: 0.58 },
      fat: { target: 0.27, min: 0.20, max: 0.35 }
    },
    fat_loss: {
      protein: { target: 0.30, min: 0.25, max: 0.35 },
      carbs: { target: 0.45, min: 0.40, max: 0.50 },
      fat: { target: 0.25, min: 0.20, max: 0.30 }
    },
    athlete: {
      protein: { target: 0.28, min: 0.20, max: 0.35 },
      carbs: { target: 0.495, min: 0.45, max: 0.58 },
      fat: { target: 0.225, min: 0.20, max: 0.23 }
    }
  },
  male: {
    balanced: {
      protein: { target: 0.24, min: 0.15, max: 0.35 },
      carbs: { target: 0.52, min: 0.45, max: 0.60 },
      fat: { target: 0.24, min: 0.23, max: 0.25 }
    },
    fat_loss: {
      protein: { target: 0.30, min: 0.25, max: 0.35 },
      carbs: { target: 0.485, min: 0.45, max: 0.55 },
      fat: { target: 0.215, min: 0.20, max: 0.23 }
    },
    athlete: {
      protein: { target: 0.28, min: 0.20, max: 0.35 },
      carbs: { target: 0.52, min: 0.45, max: 0.60 },
      fat: { target: 0.20, min: 0.18, max: 0.22 }
    }
  },
  universal: {
    high_protein: {
      protein: { target: 0.275, min: 0.25, max: 0.30 },
      carbs: { target: 0.45, min: 0.40, max: 0.50 },
      fat: { target: 0.275, min: 0.25, max: 0.30 }
    },
    low_fat: {
      protein: { target: 0.30, min: 0.20, max: 0.40 },
      carbs: { target: 0.60, min: 0.50, max: 0.70 },
      fat: { target: 0.15, min: 0.10, max: 0.20 }
    },
    low_carb: {
      protein: { target: 0.35, min: 0.25, max: 0.45 },
      carbs: { target: 0.25, min: 0.10, max: 0.35 },
      fat: { target: 0.45, min: 0.40, max: 0.55 }
    }
  }
};

const ACTIVITY_LEVELS = [
  { value: 1.2, label: 'Hreyfingarlítill (lítið eða ekkert æfingar)' },
  { value: 1.375, label: 'Létt (æfingar 1-3 daga/viku)' },
  { value: 1.465, label: 'Miðlungs (æfingar 3-5 daga/viku)' },
  { value: 1.725, label: 'Mjög virkur (æfingar 6-7 daga/viku)' },
  { value: 1.9, label: 'Mikill virkur (líkamleg vinna + æfingar)' }
];

function calculateBMR(gender: string, weight: number, height: number, age: number): number {
  const baseBMR = 10 * weight + 6.25 * height - 5 * age;
  return gender === 'male' ? baseBMR + 5 : baseBMR - 161;
}

function calculateTDEE(bmr: number, activityMultiplier: number): number {
  return bmr * activityMultiplier;
}

function calculateTargetCalories(tdee: number, goal: string, goalIntensity?: string): number {
  if (goal === 'maintain') {
    return Math.round(tdee);
  }

  if (goalIntensity && (goal === 'lose_fat' || goal === 'build_muscle')) {
    const goalConfig = GOAL_INTENSITY_CONFIG[goal as 'lose_fat' | 'build_muscle'];
    if (goalConfig) {
      const intensity = goalConfig[goalIntensity as keyof typeof goalConfig];
      if (intensity) {
        if (goal === 'lose_fat' && 'deficit' in intensity) {
          return Math.round(tdee + intensity.deficit);
        } else if (goal === 'build_muscle' && 'surplus' in intensity) {
          return Math.round(tdee + intensity.surplus);
        }
      }
    }
  }

  // Fallback defaults
  if (goal === 'lose_fat') {
    return Math.round(tdee - 500);
  } else if (goal === 'build_muscle') {
    return Math.round(tdee + 250);
  }

  return Math.round(tdee);
}

function calculateMacros(targetCalories: number, macroPreset: string, gender: string) {
  const preset = MACRO_PRESETS.universal[macroPreset as keyof typeof MACRO_PRESETS.universal] ||
    (MACRO_PRESETS[gender as keyof typeof MACRO_PRESETS] as any)?.[macroPreset] ||
    (MACRO_PRESETS[gender as keyof typeof MACRO_PRESETS] as any)?.balanced ||
    MACRO_PRESETS.female.balanced;

  const proteinCalories = targetCalories * preset.protein.target;
  const carbCalories = targetCalories * preset.carbs.target;
  const fatCalories = targetCalories * preset.fat.target;

  const proteinGrams = Math.round(proteinCalories / 4);
  const carbGrams = Math.round(carbCalories / 4);
  const fatGrams = Math.round(fatCalories / 9);

  const proteinMinGrams = Math.round((targetCalories * preset.protein.min) / 4);
  const proteinMaxGrams = Math.round((targetCalories * preset.protein.max) / 4);
  const carbMinGrams = Math.round((targetCalories * preset.carbs.min) / 4);
  const carbMaxGrams = Math.round((targetCalories * preset.carbs.max) / 4);
  const fatMinGrams = Math.round((targetCalories * preset.fat.min) / 9);
  const fatMaxGrams = Math.round((targetCalories * preset.fat.max) / 9);

  const sugarLimit = Math.round((targetCalories * 0.10) / 4);
  const saturatedFatLimit = Math.round((targetCalories * 0.10) / 9);

  return {
    protein: {
      grams: proteinGrams,
      calories: proteinCalories,
      percentage: Math.round(preset.protein.target * 100),
      minGrams: proteinMinGrams,
      maxGrams: proteinMaxGrams
    },
    carbs: {
      grams: carbGrams,
      calories: carbCalories,
      percentage: Math.round(preset.carbs.target * 100),
      minGrams: carbMinGrams,
      maxGrams: carbMaxGrams
    },
    fat: {
      grams: fatGrams,
      calories: fatCalories,
      percentage: Math.round(preset.fat.target * 100),
      minGrams: fatMinGrams,
      maxGrams: fatMaxGrams
    },
    sugarLimit,
    saturatedFatLimit
  };
}

function generateExplanation(
  gender: string,
  age: number,
  weight: number,
  height: number,
  bmr: number,
  tdee: number,
  targetCalories: number,
  goal: string,
  goalIntensity?: string
): string {
  const genderText = gender === 'male' ? 'karl' : 'kona';
  const deficit = tdee - targetCalories;
  const surplus = targetCalories - tdee;

  let explanation = `Byggt á upplýsingum þínum (${genderText}, ${age} ára, ${weight} kg, ${height} cm) er áætlað BMR ${Math.round(bmr).toLocaleString()} kcal/dag og viðhaldskaloríur (TDEE) ${Math.round(tdee).toLocaleString()} kcal á dag. `;

  if (goal === 'lose_fat') {
    explanation += `Fyrir vægþyngd á ${goalIntensity === 'mild' ? '~0.25 kg' : '~0.5 kg'} á viku mælum við með ${targetCalories.toLocaleString()} kcal á dag (${Math.round(deficit).toLocaleString()} kcal skortur). `;
  } else if (goal === 'build_muscle') {
    explanation += `Fyrir vöðvavöxt mælum við með ${targetCalories.toLocaleString()} kcal á dag (${Math.round(surplus).toLocaleString()} kcal umfram). `;
  } else {
    explanation += `Fyrir viðhald þyngdar mælum við með að borða um ${targetCalories.toLocaleString()} kcal á dag. `;
  }

  explanation += `Makróskiptingin hér að neðan er byggð á næringarráðleggingum (ADA/WHO) og er hægt að aðlaga innan ráðlagðra sviða.`;

  return explanation;
}

function formatCaloriesDescription(goal: string, tdee: number, targetCalories: number): string {
  const difference = Math.abs(targetCalories - tdee);

  if (goal === 'lose_fat') {
    return `${difference.toLocaleString()} kcal skortur frá viðhaldi`;
  } else if (goal === 'build_muscle') {
    return `${difference.toLocaleString()} kcal umfram viðhald`;
  } else {
    return 'Jafnt og viðhaldskaloríur';
  }
}

const Macros = () => {
  // Load saved form data from localStorage
  const loadSavedData = () => {
    try {
      const saved = localStorage.getItem('macros-calculator-data');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading saved data:', e);
    }
    return {
      gender: '',
      age: '',
      weight: '',
      height: '',
      activity: '',
      goal: '',
      goalIntensity: '',
      macroPreset: ''
    };
  };

  const [formData, setFormData] = useState(loadSavedData);
  const [results, setResults] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);

  // Remove any email signup forms from the bottom of the page
  useEffect(() => {
    const removeEmailForms = () => {
      // Remove ConvertKit/Gummi forms that might be injected by global scripts
      const allForms = document.querySelectorAll('form[data-sv-form], .ck_form, [id*="ck"], [class*="convertkit"], [class*="formkit"], [data-sv-form]');
      allForms.forEach(form => {
        form.remove();
      });
      
      // Also check for Gummi forms
      const allGummiForms = document.querySelectorAll('[id*="gummi"]');
      allGummiForms.forEach(form => {
        form.remove();
      });
    };

    // Remove immediately and set up interval to catch any that load later
    removeEmailForms();
    const interval = setInterval(removeEmailForms, 500);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      if (field === 'goal' && (value !== 'lose_fat' && value !== 'build_muscle')) {
        newData.goalIntensity = '';
      }
      // Save to localStorage whenever form data changes
      try {
        localStorage.setItem('macros-calculator-data', JSON.stringify(newData));
      } catch (e) {
        console.error('Error saving data:', e);
      }
      return newData;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const gender = formData.gender;
    const age = parseInt(formData.age);
    const weight = parseFloat(formData.weight);
    const height = parseInt(formData.height);
    const activityMultiplier = parseFloat(formData.activity);
    const goal = formData.goal;
    const goalIntensity = formData.goalIntensity;
    const macroPreset = formData.macroPreset;

    if (!gender || !age || !weight || !height || !activityMultiplier || !goal || !macroPreset) {
      alert('Vinsamlegast fylltu út öll nauðsynleg reiti.');
      return;
    }

    if ((goal === 'lose_fat' || goal === 'build_muscle') && !goalIntensity) {
      alert('Vinsamlegast veldu styrkleika markmiðs.');
      return;
    }

    if (age < 16 || age > 100) {
      alert('Aldur verður að vera á milli 16 og 100 ára.');
      return;
    }

    if (weight < 30 || weight > 300) {
      alert('Þyngd verður að vera á milli 30 og 300 kg.');
      return;
    }

    if (height < 100 || height > 250) {
      alert('Hæð verður að vera á milli 100 og 250 cm.');
      return;
    }

    const bmr = calculateBMR(gender, weight, height, age);
    const tdee = calculateTDEE(bmr, activityMultiplier);
    const targetCalories = calculateTargetCalories(tdee, goal, goalIntensity);
    const macros = calculateMacros(targetCalories, macroPreset, gender);
    const explanation = generateExplanation(gender, age, weight, height, bmr, tdee, targetCalories, goal, goalIntensity);
    const caloriesDescription = formatCaloriesDescription(goal, tdee, targetCalories);

    setResults({
      bmr,
      tdee,
      targetCalories,
      macros,
      explanation,
      caloriesDescription
    });
    setShowResults(true);
  };

  const resetCalculator = () => {
    // Keep the form data - just hide results and show form again
    setResults(null);
    setShowResults(false);
    // Scroll back to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getMacroPresetOptions = () => {
    const gender = formData.gender;
    const options: { value: string; label: string }[] = [];

    const presetLabels: { [key: string]: string } = {
      balanced: 'Jafnvægi',
      fat_loss: 'Fituhægð',
      athlete: 'Íþróttamaður',
      high_protein: 'Háprótein',
      low_fat: 'Lág fita',
      low_carb: 'Lág kolvetni'
    };

    // Add gender-specific presets if gender is selected
    if (gender && (gender === 'male' || gender === 'female')) {
      const genderPresets = MACRO_PRESETS[gender as 'male' | 'female'];
      if (genderPresets) {
        Object.keys(genderPresets).forEach(key => {
          options.push({ value: key, label: presetLabels[key] || key });
        });
      }
    }

    // Always add universal presets
    Object.keys(MACRO_PRESETS.universal).forEach(key => {
      options.push({ value: key, label: presetLabels[key] || key });
    });

    return options;
  };

  const getGoalIntensityOptions = () => {
    if (!formData.goal || (formData.goal !== 'lose_fat' && formData.goal !== 'build_muscle')) {
      return [];
    }

    const intensities = GOAL_INTENSITY_CONFIG[formData.goal as keyof typeof GOAL_INTENSITY_CONFIG];
    
    return Object.entries(intensities).map(([key, value]) => ({
      value: key,
      label: value.label + (value.description ? ` - ${value.description}` : '')
    }));
  };

  return (
    <>
      <SEO
        title="Macros Reiknivél - Reiknaðu makróþörfir þínar | GF Training"
        description="Ókeypis makró reiknivél. Reiknaðu daglegar makróþörfir þínar (prótein, kolvetni, fita) byggt á markmiðum þínum. Næringarráðleggingar fyrir líkamsrækt og heilsu."
        keywords="macros, makró, makró reiknivél, prótein, kolvetni, fita, næringarráðleggingar, líkamsrækt, TDEE, BMR, kaloríur"
        canonical="https://gftraining.is/macros"
      />
      <div className="min-h-screen bg-background text-foreground py-12 px-4">
        <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Macros <span className="text-primary">Reiknivél</span>
          </h1>
          <p className="text-lg text-foreground/80">
            Reiknaðu daglegar makróþörfir þínar byggt á markmiðum þínum
          </p>
        </div>

        {!showResults ? (
          <Card className="bg-card/50 backdrop-blur-sm border border-white/10">
            <CardHeader>
              <CardTitle>Sláðu inn upplýsingar</CardTitle>
              <CardDescription>Fylltu út formið hér að neðan til að reikna makró</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="gender">Kyn *</Label>
                    <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Veldu kyn" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Karl</SelectItem>
                        <SelectItem value="female">Kona</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="age">Aldur (ár) *</Label>
                    <Input
                      id="age"
                      type="number"
                      min="16"
                      max="100"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="weight">Þyngd (kg) *</Label>
                    <Input
                      id="weight"
                      type="number"
                      step="0.1"
                      min="30"
                      max="300"
                      value={formData.weight}
                      onChange={(e) => handleInputChange('weight', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="height">Hæð (cm) *</Label>
                    <Input
                      id="height"
                      type="number"
                      min="100"
                      max="250"
                      value={formData.height}
                      onChange={(e) => handleInputChange('height', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="activity">Hreyfingarstig *</Label>
                    <Select value={formData.activity} onValueChange={(value) => handleInputChange('activity', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Veldu hreyfingarstig" />
                      </SelectTrigger>
                      <SelectContent>
                        {ACTIVITY_LEVELS.map(level => (
                          <SelectItem key={level.value} value={level.value.toString()}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="goal">Markmið *</Label>
                    <Select value={formData.goal} onValueChange={(value) => handleInputChange('goal', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Veldu markmið" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maintain">Viðhalda þyngd</SelectItem>
                        <SelectItem value="lose_fat">Lækka fitu</SelectItem>
                        <SelectItem value="build_muscle">Byggja vöðva</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {(formData.goal === 'lose_fat' || formData.goal === 'build_muscle') && (
                    <div>
                      <Label htmlFor="goalIntensity">Styrkleiki markmiðs *</Label>
                      <Select value={formData.goalIntensity} onValueChange={(value) => handleInputChange('goalIntensity', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Veldu styrkleika" />
                        </SelectTrigger>
                        <SelectContent>
                          {getGoalIntensityOptions().map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="macroPreset">Makró fyrirframstilling *</Label>
                    <Select 
                      value={formData.macroPreset} 
                      onValueChange={(value) => handleInputChange('macroPreset', value)} 
                      required
                      disabled={!formData.gender}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={formData.gender ? "Veldu makró fyrirframstillingu" : "Veldu kyn fyrst"} />
                      </SelectTrigger>
                      <SelectContent>
                        {getMacroPresetOptions().length > 0 ? (
                          getMacroPresetOptions().map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))
                        ) : (
                          <SelectItem value="" disabled>Vinsamlegast veldu kyn fyrst</SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Reikna Makró
                </Button>
              </form>

              {/* Fjarþjálfun Commercial */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <Link to="/pricing" className="group block">
                  <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <CardContent className="p-4 md:p-5">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors flex-shrink-0">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-base md:text-lg mb-1">Viltu fá sérsniðna aðstoð?</h4>
                          <p className="text-sm text-foreground/70 mb-2">
                            Fjarþjálfun sem passar við þig og markmiðin þín
                          </p>
                          <div className="flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                            Skoða verð <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle>Niðurstöður</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-5">
                {/* Target Calories - Hero Section */}
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl p-4 md:p-5 border border-primary/30">
                  <div className="text-center">
                    <div className="text-xs md:text-sm text-foreground/70 mb-1">Markmiðskaloríur á dag</div>
                    <div className="text-5xl sm:text-6xl md:text-6xl font-black text-primary mb-1">
                      {results.targetCalories.toLocaleString()}
                    </div>
                    <div className="text-base md:text-lg font-semibold mb-1">kcal</div>
                    <div className="text-xs md:text-sm text-foreground/60">{results.caloriesDescription}</div>
                  </div>
                </div>

                {/* Macros - Main Focus */}
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Makróskipting</h3>
                  
                  <div className="bg-card/40 rounded-xl p-3 md:p-4 border border-white/10">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 mb-2">
                      <div>
                        <span className="font-bold text-base md:text-lg">Prótein</span>
                        <div className="text-xs text-foreground/60 mt-0.5">
                          {results.macros.protein.percentage}% af kaloríum
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="text-2xl sm:text-3xl md:text-3xl font-black">{results.macros.protein.grams}</span>
                        <span className="text-base md:text-lg font-semibold ml-1">g</span>
                      </div>
                    </div>
                    <div className="text-xs text-foreground/60 break-words">
                      Svið: {results.macros.protein.minGrams}–{results.macros.protein.maxGrams} g • {Math.round(results.macros.protein.calories)} kcal
                    </div>
                  </div>

                  <div className="bg-card/40 rounded-xl p-3 md:p-4 border border-white/10">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 mb-2">
                      <div>
                        <span className="font-bold text-base md:text-lg">Kolvetni</span>
                        <div className="text-xs text-foreground/60 mt-0.5">
                          {results.macros.carbs.percentage}% af kaloríum
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="text-2xl sm:text-3xl md:text-3xl font-black">{results.macros.carbs.grams}</span>
                        <span className="text-base md:text-lg font-semibold ml-1">g</span>
                      </div>
                    </div>
                    <div className="text-xs text-foreground/60 break-words">
                      Svið: {results.macros.carbs.minGrams}–{results.macros.carbs.maxGrams} g • {Math.round(results.macros.carbs.calories)} kcal • Sykur: &lt; {results.macros.sugarLimit} g
                    </div>
                  </div>

                  <div className="bg-card/40 rounded-xl p-3 md:p-4 border border-white/10">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 mb-2">
                      <div>
                        <span className="font-bold text-base md:text-lg">Fita</span>
                        <div className="text-xs text-foreground/60 mt-0.5">
                          {results.macros.fat.percentage}% af kaloríum
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="text-2xl sm:text-3xl md:text-3xl font-black">{results.macros.fat.grams}</span>
                        <span className="text-base md:text-lg font-semibold ml-1">g</span>
                      </div>
                    </div>
                    <div className="text-xs text-foreground/60 break-words">
                      Svið: {results.macros.fat.minGrams}–{results.macros.fat.maxGrams} g • {Math.round(results.macros.fat.calories)} kcal • Mett fita: &lt; {results.macros.saturatedFatLimit} g
                    </div>
                  </div>
                </div>

                {/* BMR and TDEE - Less Prominent */}
                <div className="pt-3 md:pt-4 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-card/20 rounded-lg p-2 md:p-3">
                      <div className="text-xs text-foreground/50 mb-0.5">BMR</div>
                      <div className="text-sm md:text-base font-semibold">{Math.round(results.bmr).toLocaleString()} kcal</div>
                    </div>
                    <div className="bg-card/20 rounded-lg p-2 md:p-3">
                      <div className="text-xs text-foreground/50 mb-0.5">TDEE</div>
                      <div className="text-sm md:text-base font-semibold">{Math.round(results.tdee).toLocaleString()} kcal</div>
                    </div>
                  </div>
                  {/* Explanation text below BMR and TDEE */}
                  <div className="text-xs text-foreground/70 leading-relaxed">
                    {results?.explanation}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button onClick={resetCalculator} variant="outline" className="flex-1">
                    Reikna Aftur
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Promotional Section - Subtle and Value-Focused */}
            <div className="mt-6 md:mt-8 space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground/90 mb-2">
                  Viltu ná betri árangri með þessum Macros?
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Email List - 30 Day Program */}
                <Link to="/email2" className="group">
                  <Card className="bg-card/40 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/10">
                    <CardContent className="p-4 md:p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-sm md:text-base mb-1">Ókeypis ráðleggingar</h4>
                          <p className="text-xs text-foreground/60">
                            30 daga póstlisti með hagnýtum ráðum
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                        Skrá mig <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Personal Training */}
                <Link to="/pricing" className="group">
                  <Card className="bg-card/40 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/10">
                    <CardContent className="p-4 md:p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-sm md:text-base mb-1">Fjarþjálfun</h4>
                          <p className="text-xs text-foreground/60">
                            Sérsniðin þjálfun sem passar við þig
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                        Skoða verð <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* VIP Training */}
                <Link to="/apply" className="group">
                  <Card className="bg-card/40 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden">
                    <div className="absolute top-2 right-2">
                      <div className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">
                        VIP
                      </div>
                    </div>
                    <CardContent className="p-4 md:p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="bg-primary/30 p-2 rounded-lg group-hover:bg-primary/40 transition-colors">
                          <Sparkles className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-sm md:text-base mb-1">VIP þjálfun</h4>
                          <p className="text-xs text-foreground/60">
                            Premium þjálfun með takmarkaðu plássi
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                        Sækja um <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default Macros;

