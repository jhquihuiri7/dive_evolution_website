import Header from "@/components/header";
import EmblaCarousel from "@/components/galeria";
import { EmblaOptionsType } from 'embla-carousel'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import './embla.css'

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

const IMAGES = [
  '/images/background.jpg',
  '/images/background.jpg',
  '/images/background.jpg',
  '/images/background.jpg'
];

export default function Home() {
  return (
    <div>
      <Header/>
      <EmblaCarousel slides={IMAGES} options={OPTIONS}></EmblaCarousel>
    </div>
  );
}
