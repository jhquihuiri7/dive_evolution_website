
import Footer from "@/components/footer";
import HeaderTour from "@/components/header_tour";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export default function Home() {
  return (
    <div>
      <HeaderTour/>
      <Footer/>
    </div>
  );
}
