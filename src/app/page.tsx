import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Reason from "@/components/home/reason";
import Statistics from "@/components/home/statistics";
import Header from "@/components/header";

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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Laboratorium Lingkungan PJT. Hello World Footer.</p>
        </div>
      </footer>
    </div>
  );
}
