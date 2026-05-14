import { Link } from "react-router-dom";

const Email3 = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent opacity-70"></div>

      <div className="container mx-auto px-4 py-12 relative z-10 w-full">
        <div className="absolute top-8 left-8 md:left-12 z-20">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-black tracking-tight uppercase font-display text-white">
              GF<span className="text-primary">Training</span>
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto mt-20 lg:mt-0">
          <div className="space-y-8 text-left max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Eina <span className="text-blue-500">ókeypis æfingaprógramið</span> sem þú þarft í Janúar
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Breyttu líkamanum, bættu heilsuna og byrjaðu janúar af krafti með sama æfingakerfi og ég nota til að ná árangri með mínum viðskiptavinum.
            </p>

            <div className="space-y-5 pt-2">
              {[
                "Ókeypis aðgangur að hágæða æfingaplani",
                "Fáðu 6 daga æfingarprógram beint í pósthólfið",
                'Vertu tilbúinn fyrir janúar og slepptu hefðbundnu "átaki"',
              ].map((line) => (
                <div key={line} className="flex items-start gap-3">
                  <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                    <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-gray-200 font-medium">{line}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center w-full max-w-md mx-auto lg:max-w-full">
            <div className="relative z-10 w-full max-w-md rounded-lg overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
              <div className="relative bg-white rounded-lg shadow-2xl">
                <img src="/images/workout-plan-preview.png" alt="Workout Plan Preview" className="w-full h-auto block" />
                <div
                  className="absolute inset-x-0 bottom-0 h-[33%] z-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0.6) 60%, transparent 100%)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                ></div>
              </div>
            </div>

            <div className="absolute bottom-[-25px] md:bottom-[-45px] z-50 w-full max-w-[95%] md:max-w-sm">
              <div
                className="bg-[#0a0a0a] rounded-2xl p-6 md:p-8 relative"
                style={{
                  border: "2px solid rgba(59, 130, 246, 0.9)",
                  boxShadow:
                    "0 0 50px rgba(59, 130, 246, 0.6), 0 0 100px rgba(59, 130, 246, 0.4), inset 0 0 30px rgba(59, 130, 246, 0.15)",
                }}
              >
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center leading-tight">
                  Eina sem ég þarf er að heyra frá þér — hafðu samband og við finnum leiðina
                </h2>
                <div className="flex flex-col items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-500 transition-colors"
                  >
                    Hafa samband
                  </Link>
                  <p className="text-center text-xs text-gray-400">
                    Skráning í póstlistann fer nú í gegnum sambandsformið.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email3;
