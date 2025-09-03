import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const Reason = () => {
  const features = [
    {
      icon: '🏅',
      title: 'Terakreditasi & Teregistrasi Secara Resmi',
      description: 'Telah terakreditasi ISO/IEC 17025:2017 KAN (LP-1646-IDN), teregistrasi KLHK (00015/LPJ/LABLING-1/LRK/KLHK), dan ditunjuk sebagai perusahaan Jasa K3 KEMENAKER (5/301/AS.0102/XI/2023)'
    },
    {
      icon: '✅',
      title: 'Personel Tersertifikasi',
      description: 'Tenaga ahli yang telah tersertifikasi BNSP (Badan Nasional Sertifikasi Profesi), AKJU KEMENAKER, AK3 KEMENAKER, dan AK3 Lingkungan Kerja KEMENAKER'
    },
    {
      icon: '🌐',
      title: 'Etis dan Profesional',
      description: 'Menggunakan metode pengujian terbaru yang sesuai dengan standar SNI dan APHA. Berkomitmen menjamin hasil yang akurat, cepat, dan sesuai dengan mutu.'
    }
  ];

  return (
    <section id="reason" className="pt-20 bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Info Penting
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mengapa Memilih Kami?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Laboratorium Lingkungan Perum Jasa Tirta I merupakan laboratorium terakreditasi yang 
              berkomitmen memberikan layanan terbaik dalam bidang pengujian dan analisis lingkungan.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="lg:pl-8">
            <div className="relative group">
              <Image
                src="/assets/images/lab_cropped.png"
                alt="Laboratory Professional"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300"></div>
              {/* Decorative shadow background */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-200/20 to-blue-300/20 rounded-3xl -z-10 blur-lg opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Kualifikasi Personil
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Lingkungan Kerja</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Ahli K3 Lingkungan Kerja
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Ahli K3 Kimia
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Ahli K3 Umum
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Analisis & Teknik</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Analis Spektrofotometris
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Analis Volumetri
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Petugas Pengambil Contoh Air dan Udara
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Sertifikasi Lainnya</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    UPI
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Sampling
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Badan Standarisasi Nasional
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;