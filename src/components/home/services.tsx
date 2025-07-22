import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: '💧',
      title: 'Pengambilan Sampel Air untuk Uji Fisika, Kimia, dan Mikrobiologi',
      description: 'Layanan pengambilan dan analisis sampel air dengan standar internasional',
    },
    {
      icon: '🌬️',
      title: 'Pengambilan Sampel Udara Ambient',
      description: 'Monitoring kualitas udara ambient dengan teknologi terdepan'
    },
    {
      icon: '🏭',
      title: 'Pengambilan Sampel Udara Emisi',
      description: 'Pengujian emisi industri sesuai regulasi lingkungan'
    },
    {
      icon: '📢',
      title: 'Pengambilan Sampel Kebisingan',
      description: 'Pengukuran tingkat kebisingan lingkungan dan industri'
    },
    {
      icon: '🏢',
      title: 'Pengambilan Sampel Udara Lingkungan Kerja',
      description: 'Monitoring kualitas udara di lingkungan kerja untuk K3'
    },
    {
      icon: '🔬',
      title: 'Pengambilan Sample Mikrobiologi',
      description: 'Analisis mikrobiologi untuk berbagai keperluan'
    },
    {
      icon: '☀️',
      title: 'Pengambilan Sample Pencahayaan',
      description: 'Pengukuran intensitas cahaya di lingkungan kerja'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apa Yang Dapat Kami Lakukan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan pengujian dan analisis lingkungan dengan standar internasional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white hover:bg-blue-600 border border-gray-200 overflow-hidden cursor-pointer ${
                index === 6 ? 'md:col-start-2 lg:col-start-2' : ''
              }`}
            >
              <CardContent className="p-8 relative">
                {/* Konten utama - hilang saat hover */}
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <div className="text-4xl mb-4">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>

                {/* Tombol "Lihat Selengkapnya" - muncul saat hover, di tengah card */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-4">
                      {service.icon}
                    </div>
                    <div className="font-semibold text-lg mb-4 flex items-center">
                      <span>Lihat Selengkapnya</span>
                      <svg 
                        className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/water-services">
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
    </section>
  );
};

export default Services;