"use client";

import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Events from "./Events";

export default function HomePage() {
  return (
    <div>
      <Hero /> 
      <Services />
      <Testimonials />
      <Events />
    </div>
  );
}

