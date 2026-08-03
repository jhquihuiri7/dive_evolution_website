import { WHATSAPP } from "@/lib/motion";

export type Tour = {
  title: string; type: string; price: number;
  description: string; description_short: string;
  include: string[]; imageUrl: string;
};

/** Card de tour: imagen protagonista, chip de vidrio, precio con jerarquía clara. */
function TourCard({ t }: { t: Tour }) {
  return (
    <article className="reveal group flex min-w-[280px] flex-1 basis-[320px] flex-col overflow-hidden rounded-[26px] border border-[#ececf0] bg-white shadow-[0_1px_2px_rgba(0,0,0,.03),0_14px_36px_rgba(0,0,0,.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_2px_8px_rgba(0,0,0,.05),0_28px_66px_rgba(0,0,0,.13)]"
             style={{ transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }}>
      <div className="relative aspect-[16/11] overflow-hidden bg-[#e8e8ed]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={t.imageUrl} alt={t.title} loading="lazy"
             className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
             style={{ transitionTimingFunction: "cubic-bezier(.25,.1,.25,1)" }} />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.42)_0%,rgba(0,0,0,0)_42%)]" />
        <span className="absolute left-[18px] top-[18px] inline-flex whitespace-nowrap rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-[11.5px] font-medium uppercase tracking-[.1em] text-white backdrop-blur-md backdrop-saturate-[1.8]">
          {t.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="mb-2 text-[clamp(24px,2.2vw,30px)] font-semibold leading-tight tracking-[-0.03em] text-[#1d1d1f]">{t.title}</h3>
        <p className="mb-2.5 text-[17px] font-medium leading-snug tracking-[-0.02em] text-[#1d1d1f]">{t.description}</p>
        <p className="mb-5 text-[15px] font-light leading-relaxed text-[#86868b] [text-wrap:pretty]">{t.description_short}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {t.include.map((i) => (
            <span key={i} className="inline-flex rounded-full bg-[#f5f5f7] px-3.5 py-1.5 text-[13px] text-[#4b4b50]">{i}</span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-[#ececf0] pt-5">
          <div>
            <span className="block text-[12.5px] text-[#86868b]">Desde</span>
            <span className="text-[30px] font-semibold tracking-[-0.035em] text-[#1d1d1f]">${t.price}</span>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
             className="inline-flex min-h-[44px] items-center rounded-full bg-[#0a1d39] px-5 text-[15px] font-medium text-white transition-transform duration-300 hover:-translate-y-px hover:scale-[1.03]">
            Reservar
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Tours({ tourList }: { tourList: Tour[] }) {
  return (
    <div className="mx-auto flex max-w-[1280px] flex-wrap gap-5 px-5 sm:px-8 lg:gap-7 lg:px-12">
      {tourList.map((t) => <TourCard key={t.title} t={t} />)}
    </div>
  );
}
