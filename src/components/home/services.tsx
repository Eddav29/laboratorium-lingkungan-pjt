import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Services = () => {

  return (

    
    <section id="services" className="py-20 bg-white">
       {/* Main Content */}
      <div id="services" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apa Yang Dapat Kami Lakukan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan pengujian dan analisis lingkungan dengan standar internasional
            </p>
          </div>
          {/* Service Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Link href="/services/air" className="block group h-full">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-blue-200 h-full flex flex-col">
                <div className="text-blue-600 text-5xl mb-6 text-center">💧</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Analisis Air
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed flex-1">
                  Pengujian komprehensif kualitas air minum, air limbah, dan air
                  lingkungan sesuai standar nasional
                </p>
              </div>
            </Link>

            <Link href="/services/udara" className="block group h-full">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-green-200 h-full flex flex-col">
                <div className="text-green-600 text-5xl mb-6 text-center">🌬️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Analisis Udara
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed flex-1">
                  Pemantauan kualitas udara ambient, emisi, dan pencemaran udara
                  dengan peralatan canggih
                </p>
              </div>
            </Link>

            <Link href="/services/lainnya" className="block group h-full">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-purple-200 h-full flex flex-col">
                <div className="text-purple-600 text-5xl mb-6 text-center">🔬</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Layanan Lainnya
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed flex-1">
                  Analisis tanah, limbah B3, mikrobiologi, dan konsultasi
                  lingkungan terintegrasi
                </p>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg mr-4"
              >
                Lihat Selengkapnya
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg"
              >
                Hubungi Kami
              </Button>
            </Link>
          </div>
          
        </div>
      </div>

    </section>
  );
};

export default Services;