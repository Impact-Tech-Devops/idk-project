import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contact from "./components/ContactForm";
import Faq from "./components/Faq";
import Brand from "./components/Brand";
import Gallery from "./components/Gallery";
import Events from "./components/Events";

// import dynamic from "next/dynamic";
// const HeatmapChart = dynamic(
//   ()=> import("components/common/HeatmapChart"),
//   {
//     ssr : false,
//   }
// );


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <Brand/>
        <Features/>
        <Gallery/>
        <Faq/>
        <Events/>
        <Contact/>
      </main>
      <Footer />
    </>
  );
}
