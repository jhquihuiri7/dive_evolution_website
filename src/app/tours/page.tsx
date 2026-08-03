import Footer from "@/components/footer";
import HeaderTour from "@/components/header_tour";
import Reveals from "@/components/reveals";
import Tours, { type Tour } from "@/components/tours";

const tourList: Tour[] = [
  {
    title: "Tour 360",
    description: "Descubre cada rincón oculto de San Cristóbal",
    price: 150,
    description_short:
      "Una travesía única en lancha rápida que te llevará a explorar los lugares más impresionantes y la increíble biodiversidad de la isla",
    imageUrl:
      "https://res.cloudinary.com/logicielapplab/image/upload/v1739994968/DIVE_EVOLUTION_2025/TOUR/upscalemedia-transformed_1_q8skaz.webp",
    type: "Tour Diario",
    include: ["Guía Certificado", "Almuerzo y Snacks"],
  },
  {
    title: "Tour Isla Española",
    description: "Encuentro Cercano con Albatros y Leones Marinos",
    price: 250,
    description_short:
      "Embárcate en una aventura única, este tour combina caminata, snorkel y navegación, permitiéndote descubrir paisajes impresionantes",
    type: "Tour Diario",
    imageUrl:
      "https://res.cloudinary.com/logicielapplab/image/upload/v1739994968/DIVE_EVOLUTION_2025/TOUR/TOUR_ESPA%C3%91OLA_jlqwl2_1_a9o078.webp",
    include: ["Guía Certificado", "Almuerzo y Snacks"],
  },
  {
    title: "Tour Panga Ride",
    description: "Aventura entre acantilados y cuevas secretas",
    price: 120,
    description_short:
      "Navega entre acantilados, cavernas y aguas cristalinas mientras descubres la increíble vida marina de Galápagos",
    type: "Tour Diario",
    imageUrl:
      "https://res.cloudinary.com/logicielapplab/image/upload/v1739994968/DIVE_EVOLUTION_2025/TOUR/upscalemedia-transformed_2_1_bjapgc.webp",
    include: ["Guía Certificado", "Transporte acuático"],
  },
];

export default function ToursPage() {
  return (
    <div>
      <HeaderTour
        title="Encuentra destinos maravillosos en San Cristóbal"
        backgroundImage="https://res.cloudinary.com/logicielapplab/image/upload/v1739769164/DIVE_EVOLUTION_2025/HEADER/EB8A1884_ujrmg5.png"
      />
      <Reveals />
      <section className="w-full bg-white py-24 sm:py-32 lg:py-44">
        <Tours tourList={tourList} />
      </section>
      <Footer />
    </div>
  );
}
