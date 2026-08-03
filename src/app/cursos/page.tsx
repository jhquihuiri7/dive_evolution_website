import Footer from "@/components/footer";
import HeaderTour from "@/components/header_tour";
import Tours, { type Tour } from "@/components/tours";

const coursesList: Tour[] = [
  {
    title: "Discovery Diving",
    description: "Descubre el mundo submarino",
    price: 200,
    description_short:
      "Descubre el fascinante mundo submarino de Galápagos sin necesidad de experiencia previa",
    type: "Curso",
    imageUrl:
      "https://res.cloudinary.com/logicielapplab/image/upload/v1739995792/DIVE_EVOLUTION_2025/CURSOS/scucba_diving_w2lmmh-min_vyscvf.webp",
    include: ["Profundidad 4 - 10 metros", "Equipo de scuba completo"],
  },
  {
    title: "Caragua",
    description: "Aventura submarina en restos sumergidos",
    price: 180,
    description_short:
      "Explora aguas cristalinas y descubre la historia oculta en las profundidades",
    type: "Curso",
    imageUrl:
      "https://res.cloudinary.com/logicielapplab/image/upload/v1739995790/DIVE_EVOLUTION_2025/CURSOS/caragua_v2iqcx-min_sxl7ta.webp",
    include: ["Profundidad 15 metros", "Equipo de scuba completo"],
  },
  {
    title: "Kicker Rock",
    description: "Buceo con tiburones",
    price: 300,
    description_short:
      "Bucea junto a tiburones martillo y descubre impresionantes paredes volcánicas en la inmersión más icónica de Galápagos.",
    type: "Curso",
    imageUrl:
      "https://res.cloudinary.com/logicielapplab/image/upload/v1739995791/DIVE_EVOLUTION_2025/CURSOS/kicker_rock_vssff0-min_lftras.webp",
    include: ["Requiere Lic. Open Water Diver", "Equipo de scuba completo"],
  },
  {
    title: "Cuevas de Hitler",
    description: "El reto definitivo",
    price: 350,
    description_short:
      "Atrévete a explorar cuevas submarinas y sumérgete hasta 38 metros en una experiencia extrema solo para buceadores avanzados.",
    type: "Curso",
    imageUrl:
      "https://res.cloudinary.com/logicielapplab/image/upload/v1739995791/DIVE_EVOLUTION_2025/CURSOS/cuevas_hitler_xnsnuh-min_awsc2m.webp",
    include: ["Requiere Lic. Advanced Open Water", "Equipo de scuba completo"],
  },
];

export default function CursosPage() {
  return (
    <div>
      <HeaderTour
        title="Sumérgete y vive la experiencia."
        backgroundImage="https://res.cloudinary.com/logicielapplab/image/upload/v1739996933/DIVE_EVOLUTION_2025/HEADER/EB8A1884_ujrmg5-min_me12u2.webp"
      />
      <section className="w-full bg-white py-24 sm:py-32 lg:py-44">
        <Tours tourList={coursesList} />
      </section>
      <Footer />
    </div>
  );
}
