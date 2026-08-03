import Image from "next/image";
import Link from "next/link";

const SOCIAL = [
  { href: "https://facebook.com", label: "Facebook", d: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" },
  { href: "https://instagram.com", label: "Instagram", d: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07Zm0 6.35a3.49 3.49 0 1 0 0 6.98 3.49 3.49 0 0 0 0-6.98Zm0 5.75a2.26 2.26 0 1 1 0-4.52 2.26 2.26 0 0 1 0 4.52Zm4.44-5.89a.81.81 0 1 1-1.63 0 .81.81 0 0 1 1.63 0Z" },
  { href: "https://youtube.com", label: "YouTube", d: "M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77C2 8.77 2 12 2 12s0 3.23.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.23 22 12 22 12s0-3.23-.42-4.81ZM10 15.02V8.98L15.2 12 10 15.02Z" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#e8e8ed] bg-[#f5f5f7] px-5 pb-8 pt-12 sm:px-8 sm:pb-11 sm:pt-[72px] lg:px-12">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-start justify-between gap-8 lg:gap-[72px]">
        <div className="min-w-[220px] flex-1 basis-[260px]">
          <div className="mb-4 flex items-center gap-2.5">
            <Image src="/logo_black.png" alt="Dive Evolution" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="text-[18px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">Dive Evolution</span>
          </div>
          <p className="m-0 max-w-[38ch] text-[14px] leading-relaxed text-[#86868b]">
            Nos esforzamos por brindarte datos precisos y confiables. Para una asesoría personalizada, contáctanos; con gusto te atenderemos.
          </p>
        </div>

        {/* Sin gap: los enlaces son adyacentes y cada uno necesita 44px de area tactil */}
        <div className="flex min-w-[160px] basis-[200px] flex-col">
          <span className="mb-1 text-[12px] font-medium uppercase tracking-[.14em] text-[#86868b]">Explora</span>
          <Link href="/tours" className="flex min-h-[44px] items-center text-[14px] text-[#1d1d1f]">Tours</Link>
          <Link href="/cursos" className="flex min-h-[44px] items-center text-[14px] text-[#1d1d1f]">Cursos</Link>
          <Link href="/contacto" className="flex min-h-[44px] items-center text-[14px] text-[#1d1d1f]">Contacto</Link>
        </div>

        <div className="flex min-w-[180px] basis-[240px] flex-col gap-2.5">
          <span className="mb-1 text-[12px] font-medium uppercase tracking-[.14em] text-[#86868b]">Visítanos</span>
          <span className="text-[14px] leading-snug text-[#1d1d1f]">Av. Isabela y Guillermo Vega Gallegos<br />San Cristóbal, Galápagos</span>
          <a href="https://wa.me/593982291894" target="_blank" rel="noopener noreferrer" className="flex min-h-[44px] items-center text-[14px] text-[#1d1d1f]">+593 98 229 1894</a>
        </div>

        <div className="flex gap-1.5">
          {SOCIAL.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
               className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e0e0e5] bg-white text-[#1d1d1f] transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d={s.d} /></svg>
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1280px] flex-wrap justify-between gap-3 border-t border-[#e8e8ed] pt-5 text-[12.5px] text-[#86868b] sm:mt-14">
        <span>© 2006–2025 Dive Evolution</span>
        <span>San Cristóbal · Galápagos · Ecuador</span>
      </div>
    </footer>
  );
}
