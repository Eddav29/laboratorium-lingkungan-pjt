import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="mr-2">🏆</span>
            Professional • Ethic • OHS
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Laboratorium Lingkungan
            <br />
            <span className="text-blue-600">Perum Jasa Tirta I</span>
          </h1>

          {/* Credentials */}
          <div className="space-y-2 mb-8 text-gray-700">
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
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200"
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