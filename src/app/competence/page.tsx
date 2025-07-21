import Link from "next/link";

export default function Competence() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Laboratorium Lingkungan PJT</div>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/services" className="hover:underline">Services</Link>
              <Link href="/competence" className="hover:underline font-bold">Competence</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Kompetensi & Sertifikasi
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Hello World - Placeholder untuk deskripsi kompetensi dan sertifikasi perusahaan
          </p>

          {/* Certifications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sertifikasi</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg shadow-md">
                <div className="text-blue-600 text-4xl mb-4 text-center">📋</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Akreditasi KAN</h3>
                <p className="text-gray-600 text-center mb-4">
                  Hello World - Placeholder untuk deskripsi akreditasi dari KAN (Komite Akreditasi Nasional)
                </p>
                <div className="text-center">
                  <span className="text-blue-600 font-medium">Nomor: PLACEHOLDER-123-2025</span>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-lg shadow-md">
                <div className="text-green-600 text-4xl mb-4 text-center">🏛️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Registrasi KLHK</h3>
                <p className="text-gray-600 text-center mb-4">
                  Hello World - Placeholder untuk deskripsi registrasi dari KLHK (Kementerian Lingkungan Hidup dan Kehutanan)
                </p>
                <div className="text-center">
                  <span className="text-green-600 font-medium">Nomor: PLACEHOLDER-456-2025</span>
                </div>
              </div>
            </div>
          </section>

          {/* Scope of Testing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ruang Lingkup Pengujian</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                    <span className="text-blue-600 mr-2">💧</span>
                    Analisis Air
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Hello World - Parameter Air 1</li>
                    <li>• Hello World - Parameter Air 2</li>
                    <li>• Hello World - Parameter Air 3</li>
                    <li>• Hello World - Parameter Air 4</li>
                    <li>• Hello World - Dan lainnya</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                    <span className="text-green-600 mr-2">🌬️</span>
                    Analisis Udara
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Hello World - Parameter Udara 1</li>
                    <li>• Hello World - Parameter Udara 2</li>
                    <li>• Hello World - Parameter Udara 3</li>
                    <li>• Hello World - Parameter Udara 4</li>
                    <li>• Hello World - Dan lainnya</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                    <span className="text-purple-600 mr-2">🔬</span>
                    Analisis Lainnya
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Hello World - Parameter Tanah</li>
                    <li>• Hello World - Parameter Limbah</li>
                    <li>• Hello World - Parameter Kebisingan</li>
                    <li>• Hello World - Parameter Lainnya</li>
                    <li>• Hello World - Dan sebagainya</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Team Competency */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Kompetensi Tim</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">👨‍🔬</div>
                <h4 className="font-semibold text-gray-700 mb-2">Analis Berpengalaman</h4>
                <p className="text-gray-600 text-sm">Hello World - Tim analis dengan pengalaman bertahun-tahun</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="font-semibold text-gray-700 mb-2">Tenaga Ahli Tersertifikasi</h4>
                <p className="text-gray-600 text-sm">Hello World - Tenaga ahli dengan sertifikasi kompetensi</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">⚙️</div>
                <h4 className="font-semibold text-gray-700 mb-2">Teknisi Terlatih</h4>
                <p className="text-gray-600 text-sm">Hello World - Teknisi yang terlatih dan berpengalaman</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="font-semibold text-gray-700 mb-2">Quality Assurance</h4>
                <p className="text-gray-600 text-sm">Hello World - Tim QA untuk menjamin kualitas hasil</p>
              </div>
            </div>
          </section>

          {/* Equipment & Technology */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Peralatan & Teknologi
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-600 text-center mb-8">
                Hello World - Placeholder untuk deskripsi peralatan dan teknologi terkini yang digunakan
              </p>
              <div className="text-center">
                <Link 
                  href="/about/peralatan" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 inline-block"
                >
                  Lihat Detail Peralatan
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Laboratorium Lingkungan PJT. Hello World Footer.</p>
        </div>
      </footer>
    </div>
  );
}