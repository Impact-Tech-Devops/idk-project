import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

import ContactHero from "../components/ContactHero";


const Page = () => {
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

export default Page;
