"use client";

import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import About from "../components/homepage/About";
import Features from "../components/homepage/Features";
import Hero from "../components/homepage/Hero";
import Loading from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Hero />
          <About />
          <Features />
          <Contact />
        </>
      )}
    </section>
  );
}
