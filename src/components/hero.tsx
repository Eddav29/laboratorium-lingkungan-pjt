import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Darkening Overlay */}
    <div className="absolute inset-0">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
        backgroundImage: `url(/assets/images/kolase.jpg)`, 
        }}
      />
      {/* Dark overlay to make text more readable */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
    </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="mr-2">🏆</span>
            Professional • Ethic • OHS
          </div>

          {/* Main Heading - Changed text color to white for better visibility against dark background */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Laboratorium Lingkungan
            <br />
            <span className="text-blue-300">Perum Jasa Tirta I</span>
          </h1>

          {/* Credentials - Lightened text color */}
          <div className="space-y-2 mb-8 text-gray-100">
            <p className="text-lg font-medium">
              AKREDITASI ISO 17025/2017 OLEH KAN (LP-1646-IDN)
            </p>
            <p className="text-base">
              REGISTRASI KLHK (00015/LPJ/LABLING-1/LRK/KLHK)
            </p>
            <p className="text-base">
              DITUNJUK SEBAGAI PERUSAHAAN JASA K3(KEMENAKER) 5/301/AS.0102/XI/2023
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/profile">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200 transform hover:scale-105"
              >
                Lebih Lanjut
              </Button>
            </Link>
            <Link href="/water-services">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 bg-transparent text-white hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200"
              >
                Cek Layanan
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;