import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const isAskorunContext = params.get("context") === "askorun";
  const isPrivacyHash = location.hash === "#privacy" || location.hash === "#terms";

  return (
    <div
      className="min-h-screen bg-background text-foreground relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 1000px 800px at 10% 5%, hsl(var(--primary)/0.20) 0%, transparent 60%),
          radial-gradient(ellipse 900px 700px at 85% 95%, hsl(var(--primary)/0.14) 0%, transparent 60%)
        `,
        backgroundSize: '100% 2000px, 100% 2000px',
        backgroundPosition: '0 0, 0 100%',
        backgroundRepeat: 'no-repeat, no-repeat'
      }}
    >
      {isPrivacyHash ? (
        <nav className="fixed top-6 left-4 right-4 z-50">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-6 max-w-[1200px] mx-auto">
            <div className="flex items-center h-16">
              <Link to="/" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                <ArrowLeft size={20} />
                <span className="text-sm font-medium">Tilbaka</span>
              </Link>
            </div>
          </div>
        </nav>
      ) : isAskorunContext ? (
        <nav className="fixed top-6 left-8 right-8 z-50">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-8 max-w-[1200px] mx-auto">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center select-none">
                <span className="text-2xl font-black tracking-tight uppercase font-display">
                  GF<span className="text-primary">Training</span>
                </span>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <Navigation />
      )}

      <section className={`pb-8 px-4 ${isPrivacyHash ? 'pt-28' : 'pt-32'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-4">Skilmálar & Persónuvernd</h1>
            <p className="text-foreground/70">Síðast uppfært 23. júlí 2025</p>
          </div>

          <div className="grid lg:grid-cols-[280px,1fr] gap-8 items-start">
            <aside className="hidden lg:block sticky top-24 self-start">
              <div className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                <h3 className="text-sm font-bold mb-3 text-foreground/90">Efnisyfirlit</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#terms" className="block text-foreground/70 hover:text-primary">Skilmálar</a>
                  <a href="#service" className="block text-foreground/70 hover:text-primary">1. Þjónusta</a>
                  <a href="#payments" className="block text-foreground/70 hover:text-primary">2. Greiðslur og endurgreiðslur</a>
                  <a href="#liability" className="block text-foreground/70 hover:text-primary">3. Ábyrgð og afsal</a>
                  <a href="#changes" className="block text-foreground/70 hover:text-primary">4. Breytingar á þjónustu</a>
                  <a href="#rules" className="block text-foreground/70 hover:text-primary">5. Notkunarreglur</a>
                  <div className="h-px bg-white/10 my-3" />
                  <a href="#privacy" className="block text-foreground/70 hover:text-primary">Persónuverndarstefna</a>
                  <a href="#data" className="block text-foreground/70 hover:text-primary">1. Gögn</a>
                  <a href="#usage" className="block text-foreground/70 hover:text-primary">2. Notkun</a>
                  <a href="#storage" className="block text-foreground/70 hover:text-primary">3. Geymsla</a>
                  <a href="#anon" className="block text-foreground/70 hover:text-primary">4. Nafnlaus gögn</a>
                  <a href="#rights" className="block text-foreground/70 hover:text-primary">5. Réttindi</a>
                  <a href="#retention" className="block text-foreground/70 hover:text-primary">6. Geymslutími</a>
                  <a href="#consent" className="block text-foreground/70 hover:text-primary">7. Samþykki</a>
                  <a href="#contact" className="block text-foreground/70 hover:text-primary">8. Hafa samband</a>
                </nav>
              </div>
            </aside>

            <div className="space-y-6">
              <div id="terms" className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-3">Skilmálar</h2>
                <p className="text-foreground/80">
                  Með því að skrá þig í þjónustu GF Training samþykkir þú eftirfarandi skilmála. GF Training býður upp á
                  fjarþjálfun, næringarráðgjöf, matarplön og markmiðasetningu í gegnum appið GF Training sem er hostað af
                  Kahunas. Öll samskipti fara fram í gegnum appið, tölvupóst eða SMS. Greiðsla fer fram með reikningi í
                  heimabanka.
                </p>
                <p className="text-foreground/80 mt-3">
                  Með samþykki samþykkir þú einnig að vera settur á tölvupóstlista GF Training og fá reglubundið markaðsefni, uppfærslur og fréttir í tölvupósti.
                </p>
              </div>

              <div id="service" className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">1. Þjónusta</h3>
                <p className="text-foreground/80">GF Training veitir fjarþjálfun í gegnum app með aðgangi að æfingamyndböndum, matarplönum, næringarráðgjöf og markmiðasetningu. Viðskiptavinur getur valið um mánaðaráskrift, 3 mánaða eða 6 mánaða pakka.</p>
              </div>

              <div id="payments" className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">2. Greiðslur og endurgreiðslur</h3>
                <p className="text-foreground/80">Greiðslur fara fram með reikningi í heimabanka. Allar greiðslur eru bindandi fyrir þann tímabilspakka sem valinn er og eru ekki endurgreiddar eftir að þjónustan hefur hafist.</p>
              </div>

              <div id="liability" className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">3. Ábyrgð og afsal ábyrgðar</h3>
                <p className="text-foreground/80">Með því að samþykkja þessa skilmála staðfestir viðskiptavinur að hann taki þátt í þjálfun og fylgi matar- og æfingaáætlunum GF Training að eigin frumkvæði og ábyrgð. GF Training og Guðmundur Friðgeirsson bera enga ábyrgð á meiðslum, vanlíðan, heilsutjóni eða öðrum afleiðingum sem kunna að koma upp við framkvæmd áætlana eða notkun efnis sem veitt er í gegnum appið, tölvupóst eða aðra miðla.</p>
                <p className="text-foreground/80 mt-3">GF Training veitir ekki læknisfræðilega ráðgjöf og hvetur alla notendur til að ráðfæra sig við lækni áður en þeir hefja æfinga- eða matarplan.</p>
                <p className="text-foreground/80 mt-3">Með því að haka við „Ég samþykki skilmála og persónuverndarstefnu" lýsir viðskiptavinur því yfir að hann afsali GF Training og Guðmundi Friðgeirssyni allri ábyrgð vegna ofangreinds og samþykki að bera ábyrgð á eigin ákvörðunum.</p>
              </div>

              <div id="changes" className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">4. Breytingar á þjónustu</h3>
                <p className="text-foreground/80">GF Training áskilur sér rétt til að breyta eða þróa þjónustuna án fyrirvara.</p>
              </div>

              <div id="rules" className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">5. Notkunarreglur</h3>
                <p className="text-foreground/80">Notendur skulu ekki deila efni þjónustunnar með öðrum. Misnotkun getur leitt til tafarlausrar lokunar á þjónustu án endurgreiðslu.</p>
              </div>

              <div id="privacy" className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-2">Persónuverndarstefna</h2>
                <p className="text-foreground/80">GF Training, í rekstri Guðmundar Friðgeirssonar, virðir réttindi notenda og vinnur að því að tryggja öryggi og trúnað persónuupplýsinga í samræmi við persónuverndarlög (GDPR). Hér er lýst hvaða gögn eru safnað, hvernig þau eru notuð og hvernig þeim er gætt.</p>
              </div>

              <div id="data" className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">1. Hvaða gögn eru tekin?</h3>
                <p className="text-foreground/80">GF Training safnar eftirfarandi gögnum eftir þörfum þjónustunnar: nafn, netfang, símanúmer, líkamsupplýsingar (ef notað), markmið, æfingaupplýsingar og næringartengd gögn.</p>
              </div>

              <div id="usage" className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">2. Hvernig eru gögnin notuð?</h3>
                <p className="text-foreground/80">Gögn eru notuð til að veita sérsniðna fjarþjálfun, útbúa matarplön og hafa samband vegna þjónustu. Ekki er safnað gögnum í markaðstilgangi nema með sérstöku samþykki.</p>
              </div>

              <div id="storage" className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">3. Geymsla gagna og þjónustuaðilar</h3>
                <p className="text-foreground/80">Gögn eru geymd í öruggu appi (Kahunas) og í sumum tilvikum í Google Docs. Aðgangur að gögnum er takmarkaður við Guðmund Friðgeirsson og þá þjónustuaðila sem nauðsynlega þurfa að vinna með gögnin.</p>
              </div>

              <div id="anon" className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">4. Nafnlaus gögn og greiningartól</h3>
                <p className="text-foreground/80">Í sumum tilvikum gæti GF Training nýtt nafnlausar, dulkóðaðar upplýsingar í þjónustuþróun eða greiningu með gervigreind (AI). Aldrei er hægt að rekja gögnin til einstaklinga.</p>
              </div>

              <div id="rights" className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">5. Réttindi notenda</h3>
                <p className="text-foreground/80">Notendur eiga rétt á aðgangi að eigin gögnum, leiðréttingu, eyðingu og að afturkalla samþykki sitt. Einnig er hægt að leggja fram kvörtun til Persónuverndarstofu.</p>
              </div>

              <div id="retention" className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">6. Geymslutími</h3>
                <p className="text-foreground/80">Gögn eru geymd í allt að 2 ár frá lok þjónustu nema annað sé krafist samkvæmt lögum.</p>
              </div>

              <div id="consent" className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">7. Samþykki</h3>
                <p className="text-foreground/80">Með því að haka við „Ég samþykki skilmála og persónuverndarstefnu" samþykkir notandi þessa stefnu.</p>
                <p className="text-foreground/80 mt-3">Með samþykki samþykkir notandi einnig að vera settur á tölvupóstlista GF Training og fá reglubundið markaðsefni, uppfærslur og fréttir í tölvupósti.</p>
              </div>

              <div id="contact" className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">8. Hafa samband</h3>
                <p className="text-foreground/80">Ef þú hefur spurningar um persónuverndarstefnuna, hafðu samband við okkur á gummi@gftraining.is</p>
                <p className="text-foreground/60 text-sm mt-4">Síðast uppfært 23. júlí 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {!isPrivacyHash && (
        isAskorunContext ? (
          <footer className="pb-12 px-8">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-8 max-w-[1200px] mx-auto text-center">
              <div className="mb-3">
                <span className="text-lg font-black">
                  GF<span className="text-primary">TRAINING</span>
                </span>
              </div>
              <div className="text-white/40 text-xs">© 2025 GF Training</div>
            </div>
          </footer>
        ) : (
          <Footer />
        )
      )}
    </div>
  );
};

export default Terms;


