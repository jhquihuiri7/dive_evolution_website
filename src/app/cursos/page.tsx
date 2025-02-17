
import Footer from "@/components/footer";
import HeaderTour from "@/components/header_tour";
import Tours from "@/components/tours";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export default function Home() {
  return (
    <div>
      <HeaderTour/>
      <Tours/>
      <Footer/>
    </div>
  );
}
