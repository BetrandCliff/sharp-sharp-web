// app/page.tsx

import AboutPage from "./components/about";
import AppShowcase from "./components/app_show";
import ContactPage from "./components/contact";
import Features from "./components/features";
import CTA from "./components/finalcta";
import Hero from "./components/hero";
import HowItWorks from "./components/howitworks";
import Navbar from "./components/navbar";
import Testimonials from "./components/testimonial";


export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AppShowcase/>
      <Testimonials />
      <CTA />
      <AboutPage/>
      <ContactPage/>
    </main>
  );
}