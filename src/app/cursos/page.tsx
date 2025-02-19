
import Footer from "@/components/footer";
import HeaderTour from "@/components/header_tour";
import Tours from "@/components/tours";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false

const coursesList = [
  {
    title: "Discovery Diving",
    description: "Descubre el mundo submarino",
    price: 200,
    description_short:
      "Descubre el fascinante mundo submarino de Galápagos sin necesidad de experiencia previa",
    type: "Curso",
    imageUrl:
      "https://res.cloudinary.com/logicielapplab/image/upload/v1739980841/DIVE_EVOLUTION_2025/CURSOS/scucba_diving_w2lmmh.jpg",
    include: [
      { icon: faWater, item: "Profundidad 4 - 10 metros" },
      { icon: faToggleOn, item: "Equipo de scuba completo" }
    ],
  },
  {
    title: "Caragua",
    description: "Aventura submarina en restos sumergidos",
    price: 180,
    description_short:
      "Explora aguas cristalinas y descubre la historia oculta en las profundidades",
    type: "Curso",
    imageUrl:
      "https://res.cloudinary.com/logicielapplab/image/upload/v1739981560/DIVE_EVOLUTION_2025/CURSOS/caragua_v2iqcx.jpg",
    include: [
      { icon: faWater, item: "Profundidad 15 metros" },
      { icon: faToggleOn, item: "Equipo de scuba completo" }
    ],
  },
  {
    title: "Kicker Rock",
    description: "Buceo con tiburones",
    price: 300,
    description_short:
      "Bucea junto a tiburones martillo y descubre impresionantes paredes volcánicas en la inmersión más icónica de Galápagos.",
    type: "Curso",
    imageUrl:
      "https://res.cloudinary.com/logicielapplab/image/upload/v1739981818/DIVE_EVOLUTION_2025/CURSOS/kicker_rock_vssff0.jpg",
    include: [
      { icon: faWater, item: "Requiere Lic. Open Water Diver" },
      { icon: faToggleOn, item: "Equipo de scuba completo" }
    ],
  },
  {
    title: "Cuevas de Hitler",
    description: "El reto definitivo",
    price: 350,
    description_short:
      "Atrévete a explorar cuevas submarinas y sumérgete hasta 38 metros en una experiencia extrema solo para buceadores avanzados.",
    type: "Curso",
    imageUrl:
      "https://res.cloudinary.com/logicielapplab/image/upload/v1739982006/DIVE_EVOLUTION_2025/CURSOS/cuevas_hitler_xnsnuh.jpg",
    include: [
      { icon: faWater, item: "Requiere Lic. Advanced Open Water" },
      { icon: faToggleOn, item: "Equipo de scuba completo" }
    ],
  },
];

export default function Home() {
  return (
    <div>
      <HeaderTour/>
      <Tours tourList={coursesList}/>
      <Footer/>
    </div>
  );
}
