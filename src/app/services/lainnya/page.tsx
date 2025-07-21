import Link from "next/link";

export default function ServicesLainnya() {
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
              <Link href="/competence" className="hover:underline">Competence</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/services" className="text-blue-600 hover:underline">Services</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">Layanan Lainnya</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-purple-600 text-6xl mb-4">🔬</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Layanan Analisis Lainnya
            </h1>
            <p className="text-xl text-gray-600">
              Hello World - Placeholder untuk deskripsi lengkap layanan analisis lainnya
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Analisis Tanah</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Hello World - Parameter Tanah 1</li>
                <li>• Hello World - Parameter Tanah 2</li>
                <li>• Hello World - Parameter Tanah 3</li>
                <li>• Hello World - Parameter Tanah 4</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Analisis Kebisingan</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Hello World - Parameter Kebisingan A</li>
                <li>• Hello World - Parameter Kebisingan B</li>
                <li>• Hello World - Parameter Kebisingan C</li>
                <li>• Hello World - Parameter Kebisingan D</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Analisis Limbah</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Hello World - Parameter Limbah 1</li>
                <li>• Hello World - Parameter Limbah 2</li>
                <li>• Hello World - Parameter Limbah 3</li>
                <li>• Hello World - Parameter Limbah 4</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Konsultasi Lingkungan</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Hello World - Layanan Konsultasi 1</li>
                <li>• Hello World - Layanan Konsultasi 2</li>
                <li>• Hello World - Layanan Konsultasi 3</li>
                <li>• Hello World - Layanan Konsultasi 4</li>
              </ul>
            </div>
          </div>

          {/* Special Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Layanan Khusus
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-gray-700 mb-2">Layanan Custom</h4>
                  <p className="text-gray-600 text-sm">Hello World - Deskripsi layanan khusus sesuai kebutuhan</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 text-2xl">⚡</span>
                  </div>
                  <h4 className="font-semibold text-gray-700 mb-2">Layanan Cepat</h4>
                  <p className="text-gray-600 text-sm">Hello World - Deskripsi layanan dengan turnaround time cepat</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 text-2xl">🏆</span>
                  </div>
                  <h4 className="font-semibold text-gray-700 mb-2">Layanan Premium</h4>
                  <p className="text-gray-600 text-sm">Hello World - Deskripsi layanan dengan standar premium</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Butuh Layanan Khusus?
            </h3>
            <p className="text-gray-600 mb-6">
              Hello World - Placeholder untuk ajakan konsultasi layanan khusus
            </p>
            <Link 
              href="/contact" 
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 inline-block"
            >
              Konsultasi Sekarang
            </Link>
          </div>
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