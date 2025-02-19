
import Footer from "@/components/footer";
import HeaderTour from "@/components/header_tour";
import Tours from "@/components/tours";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faUserShield, faUtensils } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false

const tourList = [
  {
    title: "Tour 360",
    description: "Descubre cada rincón oculto de San Cristóbal",
    price: 150,
    description_short:
      "Una travesía única en lancha rápida que te llevará a explorar los lugares más impresionantes y la increíble biodiversidad de la isla",
    imageUrl:
      "https://res.cloudinary.com/logicielapplab/image/upload/v1739979427/DIVE_EVOLUTION_2025/TOUR/leon_dormido_lvp66c.jpg",
    type: "Tour Diario",
    include: [
      { icon: faUserShield, item: "Guia Certificado" },
      { icon: faUtensils, item: "Almuerzo y Snacks" }
    ],
  },
  {
    title: "Tour Isla Española",
    description: "Encuentro Cercano con Albatros y Leones Marinos",
    price: 250,
    description_short:
      "Embárcate en una aventura única, este tour combina caminata, snorkel y navegación, permitiéndote descubrir paisajes impresionantes",
    type: "Tour Diario",
    imageUrl:
      "https://res.cloudinary.com/logicielapplab/image/upload/v1739979706/DIVE_EVOLUTION_2025/TOUR/TOUR_ESPA%C3%91OLA_jlqwl2.jpg",
    include: [
      { icon: faUserShield, item: "Guia Certificado" },
      { icon: faUtensils, item: "Almuerzo y Snacks" }
    ],
  },
  {
    title: "Tour Panga Ride",
    description: "Aventura entre acantilados y cuevas secretas",
    price: 120,
    description_short:
      "Navega entre acantilados, cavernas y aguas cristalinas mientras descubres la increíble vida marina de Galápagos",
    type: "Tour Diario",
    imageUrl:
      "https://res.cloudinary.com/logicielapplab/image/upload/v1739063246/DIVE_EVOLUTION_2025/NOSOTROS/nosotros6-min_xkgphx.webp",
    include: [
      { icon: faUserShield, item: "Guia Certificado" },
      { icon: faUtensils, item: "Transporte acuático" }
    ],
  }
];

export default function Home() {
  return (
    <div>
      <HeaderTour/>
      <Tours tourList={tourList}/>
      <Footer/>
    </div>
  );
}
