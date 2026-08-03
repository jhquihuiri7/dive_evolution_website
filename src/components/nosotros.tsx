const B = "https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/";

const IMAGES = [
  ["nosotros1-min_rgjfsr", "Zalophus wollebaeki, isla San Cristóbal"],
  ["nosotros2-min_t9zisb", "Isla Isabela, Galápagos"],
  ["nosotros3-min_pryimu", "Sesuvium portulacastru, isla Floreana"],
  ["nosotros4-min_ual3i8", "Kicker Rock, San Cristóbal"],
  ["nosotros5-min_lm2hqd", "Isla San Cristóbal, Galápagos"],
  ["nosotros6-min_xkgphx", "Fregata minor, isla San Cristóbal"],
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative w-full overflow-hidden bg-[#06090d] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-44">
      <div className="mx-auto max-w-[1280px]">
        <div className="reveal mb-6 flex items-center gap-3 sm:mb-8">
          <span className="block h-0.5 w-[26px] rounded-sm bg-[#ffc404]" />
          <span className="text-[12px] font-medium uppercase tracking-[.16em] text-white/55">Quiénes somos</span>
        </div>

        <h2 className="reveal mb-12 max-w-[24ch] text-[clamp(32px,4.6vw,68px)] font-semibold leading-[1.05] tracking-[-0.04em] [text-wrap:balance] sm:mb-16 lg:mb-[76px]" data-delay="60">
          Más de 25 años convirtiendo el océano en una forma de vida.
        </h2>

        {/* Mosaico fluido: 6 en fila en desktop, se reparte solo en móvil */}
        <div className="reveal mb-14 flex flex-wrap gap-3 sm:mb-20 lg:gap-5" data-delay="120">
          {IMAGES.map(([file, caption]) => (
            <figure key={file} className="group relative m-0 aspect-[3/4.4] min-w-[150px] flex-1 basis-[180px] cursor-pointer overflow-hidden rounded-[20px] bg-[#0d1218] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(0,0,0,.5)]"
                    style={{ transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${B}${file}.webp`} alt={caption} loading="lazy"
                   className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                   style={{ transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }} />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_45%,rgba(0,0,0,.72)_100%)]" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-[12.5px] leading-snug text-white/90 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="flex flex-wrap items-start gap-8 lg:gap-20">
          <p className="reveal m-0 min-w-[280px] max-w-[56ch] flex-1 basis-[420px] text-[clamp(18px,1.7vw,24px)] font-light leading-[1.5] tracking-[-0.02em] text-white/75">
            En DIVE EVOLUTION, más de 25 años de experiencia nos respaldan. Somos un Centro de Enseñanza Recreativa
            certificado por PSS (Professional Scuba School), una de las organizaciones de formación de buceadores más
            prestigiosas del mundo.
          </p>
          <div className="reveal flex min-w-[220px] basis-[300px] flex-col gap-px overflow-hidden rounded-[18px] bg-white/10" data-delay="100">
            {[["25+", "años de experiencia"], ["PSS", "centro de enseñanza certificado"]].map(([k, v]) => (
              <div key={k} className="flex items-baseline gap-3 bg-[#06090d] px-6 py-5">
                <span className="text-[34px] font-semibold tracking-[-0.04em]">{k}</span>
                <span className="text-[14px] text-white/55">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
