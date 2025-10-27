import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

interface FormData {
  name: string;
  age: string;
  email: string;
  phone: string;
  goal: string;
  obstacles: string;
  importance: string;
  whyNow: string;
  exerciseFrequency: string;
  eatingHabits: string;
  financialCommitment: string;
  personalCommitment: string;
  finalMotivation: string;
}

interface Step {
  title: string;
  question: string;
  description?: string;
  field: keyof FormData;
  type: "text" | "email" | "tel" | "textarea" | "radio";
  placeholder?: string;
  options?: string[];
}

const CustomApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    email: "",
    phone: "",
    goal: "",
    obstacles: "",
    importance: "",
    whyNow: "",
    exerciseFrequency: "",
    eatingHabits: "",
    financialCommitment: "",
    personalCommitment: "",
    finalMotivation: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps: Step[] = [
    {
      title: "🧩 Skref 1: Auðvelt byrjun",
      question: "Hvað heitir þú?",
      field: "name",
      type: "text",
      placeholder: "Sláðu inn nafn þitt"
    },
    {
      title: "🧩 Skref 1: Auðvelt byrjun",
      question: "Kennitala",
      field: "age",
      type: "text",
      placeholder: "Sláðu inn kennitölu þína"
    },
    {
      title: "🧩 Skref 1: Auðvelt byrjun",
      question: "Hvað er netfangið þitt?",
      field: "email",
      type: "email",
      placeholder: "netfang@dæmi.is"
    },
    {
      title: "🧩 Skref 1: Auðvelt byrjun",
      question: "Hvað er símanúmerið þitt?",
      field: "phone",
      type: "tel",
      placeholder: "123-4567"
    },
    {
      title: "🔍 Skref 2: Markmið - Framtíðarhorf",
      question: "Hvað er markmiðið þitt?",
      description: "Segðu mér nákvæmlega hvað þú vilt ná fram á næstu 90 dögum.",
      field: "goal",
      type: "textarea",
      placeholder: "Dæmi: missa 10 kg, fá meiri orku, styrkja bakið, meiri agi, o.s.frv."
    },
    {
      title: "🧱 Skref 3: Sársauki - Hvað heldur þér aftur",
      question: "Hvað er það sem heldur þér aftur núna?",
      description: "Tímaleysi, agaleysi, meiðsli, þekking, hvatning, eða annað?",
      field: "obstacles",
      type: "textarea",
      placeholder: "Segðu mér hvað heldur þér aftur..."
    },
    {
      title: "⚖️ Skref 4: Mikilvægi - Af hverju skiptir þetta máli",
      question: "Hversu mikilvægar eru þessar breytingar fyrir þig á skalanum 1–10?",
      field: "importance",
      type: "text",
      placeholder: "Sláðu inn tölu á milli 1-10"
    },
    {
      title: "⚖️ Skref 4: Mikilvægi - Af hverju skiptir þetta máli",
      question: "Hvers vegna er núna rétti tíminn til að byrja?",
      field: "whyNow",
      type: "textarea",
      placeholder: "Segðu mér af hverju núna er rétti tíminn..."
    },
    {
      title: "🏃‍♂️ Skref 5: Núverandi venjur - Staðsetja bilið",
      question: "Hversu reglulega hreyfir þú þig núna?",
      field: "exerciseFrequency",
      type: "radio",
      options: [
        "Nánast aldrei",
        "1–2x í viku",
        "3–4x í viku",
        "5+ sinnum í viku"
      ]
    },
    {
      title: "🏃‍♂️ Skref 5: Núverandi venjur - Staðsetja bilið",
      question: "Hvernig myndirðu lýsa matarvenjum þínum?",
      field: "eatingHabits",
      type: "radio",
      options: [
        "Ég borða mjög vel",
        "Mjög misjafnt",
        "Ég veit að þetta er eitthvað sem þarf að laga"
      ]
    },
    {
      title: "💰 Skref 6: Fjárhagsleg skuldbinding",
      question: "Ertu tilbúinn að fjárfesta í þjálfun ef þetta hentar þér?",
      field: "financialCommitment",
      type: "radio",
      options: [
        "Já",
        "Já, með greiðsluáætlun",
        "Ekki eins og er"
      ]
    },
    {
      title: "💪 Skref 7: Persónuleg ábyrgð",
      question: "Ertu tilbúinn að skuldbinda þig 100% og mæta með aga?",
      field: "personalCommitment",
      type: "radio",
      options: [
        "Já",
        "Nei"
      ]
    },
    {
      title: "🚀 Skref 8: Loka hvatning",
      question: "Hvað myndi gera þetta að algjörum árangri fyrir þig?",
      field: "finalMotivation",
      type: "textarea",
      placeholder: "Segðu mér um drauminn þinn..."
    }
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleInputChange = (field: keyof FormData, value: string) => {
    // Special handling for kennitala (age field)
    if (field === 'age') {
      // Remove all non-numeric characters
      const numericValue = value.replace(/\D/g, '');
      
      // Format with dash after 6 digits
      let formattedValue = numericValue;
      if (numericValue.length > 6) {
        formattedValue = numericValue.slice(0, 6) + '-' + numericValue.slice(6, 10);
      }
      
      setFormData(prev => ({
        ...prev,
        [field]: formattedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create FormData object for proper form submission
      const formDataToSend = new FormData();
      
      // Add all form fields to FormData
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://formspree.io/f/xyzbkypp', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form data
        setFormData({
          name: "",
          age: "",
          email: "",
          phone: "",
          goal: "",
          obstacles: "",
          importance: "",
          whyNow: "",
          exerciseFrequency: "",
          eatingHabits: "",
          financialCommitment: "",
          personalCommitment: "",
          finalMotivation: ""
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Villa kom upp. Reyndu aftur síðar.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Takk fyrir umsóknina!</h2>
          <div className="text-left space-y-3 text-foreground/80 bg-background/30 p-4 rounded-lg border border-white/10">
            <p>Ég les hana yfir og hef samband innan 24 klst.</p>
          </div>
        </div>
      </div>
    );
  }

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const canProceed = formData[currentStepData.field as keyof FormData].trim() !== "";

  return (
    <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Application Form</h2>
        <p className="text-foreground/60">Fill out the form below to get started</p>
      </div>
      
      <div className="space-y-6">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm font-medium text-foreground/60">
            <span>Framvinda</span>
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-background/20 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-foreground/60 font-medium">
            Spurning {currentStep + 1} af {steps.length}
          </p>
        </div>

        {/* Question */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">
            {currentStepData.question}
          </h3>
          
          {currentStepData.description && (
            <p className="text-foreground/60 italic">
              {currentStepData.description}
            </p>
          )}
          
          {currentStepData.type === "textarea" ? (
            <Textarea
              value={formData[currentStepData.field as keyof FormData]}
              onChange={(e) => handleInputChange(currentStepData.field as keyof FormData, e.target.value)}
              placeholder={currentStepData.placeholder}
              className="min-h-[120px] resize-none bg-background/50 border-white/10 text-foreground placeholder:text-foreground/50"
            />
          ) : currentStepData.type === "radio" ? (
            <div className="space-y-3">
              <RadioGroup
                value={formData[currentStepData.field as keyof FormData]}
                onValueChange={(value) => handleInputChange(currentStepData.field as keyof FormData, value)}
                className="space-y-3"
              >
                {currentStepData.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border border-white/10 bg-background/30 hover:bg-primary/5 transition-colors rounded-lg">
                    <RadioGroupItem value={option} id={`${currentStepData.field}-${index}`} />
                    <Label htmlFor={`${currentStepData.field}-${index}`} className="text-foreground cursor-pointer flex-1">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ) : (
            <Input
              type={currentStepData.field === 'age' ? 'text' : currentStepData.type}
              value={formData[currentStepData.field as keyof FormData]}
              onChange={(e) => handleInputChange(currentStepData.field as keyof FormData, e.target.value)}
              placeholder={currentStepData.placeholder}
              maxLength={currentStepData.field === 'age' ? 11 : undefined}
              className="bg-background/50 border-white/10 text-foreground placeholder:text-foreground/50"
            />
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4 border-t border-white/10">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="border-white/10 hover:bg-primary/5"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Til baka
          </Button>

          {isLastStep ? (
            <Button
              onClick={handleSubmit}
              disabled={!canProceed || isSubmitting}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isSubmitting ? "Sendi..." : "Senda umsókn"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Áfram
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomApplicationForm;
