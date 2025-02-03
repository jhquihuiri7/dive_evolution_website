import Header from "@/components/header";
import Nosotros from "@/components/nosotros";
import EmblaCarousel from "@/components/galeria";
import { EmblaOptionsType } from 'embla-carousel'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import './embla.css'

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <div>
      <Header/>
      <Nosotros/>
      <EmblaCarousel slides={SLIDES} options={OPTIONS}></EmblaCarousel>
    </div>
  );
}
