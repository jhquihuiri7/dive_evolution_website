"use client"

import Footer from "@/components/footer";
import HeaderContact from "@/components/header_contact";
import FormMap from "@/components/formMap";
import ContactQuestion from "@/components/contactQuestion";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export default function Home() {
  return (
    <div>
      <HeaderContact/>
      <ContactQuestion/>
      <FormMap/>
      <Footer/>
    </div>
  );
}
