'use client';
import About from "@/components/About";
import Contact from "@/components/Contact";
import FactorySection from "@/components/Factory";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ProductSection from "@/components/ProductSection";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";


export default function Home() {
  return (
 <> 
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <ProductSection/>
    <FactorySection/>
    <Reviews/>
    <Contact/>
    <Footer/>
 </>
  );
}
