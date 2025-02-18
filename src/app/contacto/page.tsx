"use client"

import Footer from "@/components/footer";
import HeaderContact from "@/components/header_contact";
import ContactBody from "@/components/contact_body";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export default function Home() {
  return (
    <div>
      <HeaderContact/>
      <ContactBody/>
      <Footer/>
    </div>
  );
}
