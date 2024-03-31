import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

import ContactHero from "../components/ContactHero";

const Contact = () => {
  return (
    <div>
      <Header />

      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
