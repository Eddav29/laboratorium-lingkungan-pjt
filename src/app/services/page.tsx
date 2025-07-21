import Link from "next/link";

export default function Services() {
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
              <Link href="/services" className="hover:underline font-bold">Services</Link>
              <Link href="/competence" className="hover:underline">Competence</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Layanan Kami
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Hello World - Placeholder untuk deskripsi singkat tentang layanan yang tersedia
          </p>

          {/* Service Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Link href="/services/air" className="block">
              <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-4xl mb-4">💧</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Analisis Air</h3>
                <p className="text-gray-600 mb-4">
                  Hello World - Placeholder untuk deskripsi layanan analisis kualitas air
                </p>
                <span className="text-blue-600 font-medium hover:underline">
                  Pelajari Selengkapnya →
                </span>
              </div>
            </Link>

            <Link href="/services/udara" className="block">
              <div className="bg-green-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-green-600 text-4xl mb-4">🌬️</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Analisis Udara</h3>
                <p className="text-gray-600 mb-4">
                  Hello World - Placeholder untuk deskripsi layanan analisis kualitas udara
                </p>
                <span className="text-green-600 font-medium hover:underline">
                  Pelajari Selengkapnya →
                </span>
              </div>
            </Link>

            <Link href="/services/lainnya" className="block">
              <div className="bg-purple-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-purple-600 text-4xl mb-4">🔬</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Layanan Lainnya</h3>
                <p className="text-gray-600 mb-4">
                  Hello World - Placeholder untuk deskripsi layanan analisis lainnya
                </p>
                <span className="text-purple-600 font-medium hover:underline">
                  Pelajari Selengkapnya →
                </span>
              </div>
            </Link>
          </div>

          {/* Why Choose Us */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Mengapa Memilih Kami?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="text-green-600 text-xl">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-700">Placeholder Feature 1</h4>
                  <p className="text-gray-600">Hello World - Deskripsi keunggulan pertama</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-600 text-xl">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-700">Placeholder Feature 2</h4>
                  <p className="text-gray-600">Hello World - Deskripsi keunggulan kedua</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-600 text-xl">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-700">Placeholder Feature 3</h4>
                  <p className="text-gray-600">Hello World - Deskripsi keunggulan ketiga</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-600 text-xl">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-700">Placeholder Feature 4</h4>
                  <p className="text-gray-600">Hello World - Deskripsi keunggulan keempat</p>
                </div>
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