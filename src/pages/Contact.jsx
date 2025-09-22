import React from "react";
import ContactHero from "../components/Contact/ContactHero";
import ContactForm from "../components/Contact/ContactForm";

function Contact() {
  return (
    <div
      style={{
        background: `
      linear-gradient(#0F3460,#FF5050CC)
      `,
      }}
    >
      <ContactHero />
      <ContactForm />
    </div>
  );
}

export default Contact;
