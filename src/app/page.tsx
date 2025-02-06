import Header from "@/components/header";
import Highlight from "@/components/highlight";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import './embla.css'



export default function Home() {
  return (
    <div>
      <Header/>
      <Highlight/>
    </div>
  );
}
