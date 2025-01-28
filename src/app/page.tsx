import Header from "@/components/header";
import Nosotros from "@/components/nosotros";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export default function Home() {
  return (
    <div>
      <Header/>
      <Nosotros/>
    </div>
  );
}
