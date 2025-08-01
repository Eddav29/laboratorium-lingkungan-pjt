"use client";

import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Reason from "@/components/home/reason";
import Statistics from "@/components/home/statistics";
import FAQ from "@/components/home/faq";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Reason Section - Why Choose Us */}
      <Reason />

      {/* Statistics Section */}
      <Statistics />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}
