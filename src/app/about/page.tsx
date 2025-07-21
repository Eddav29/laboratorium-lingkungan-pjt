import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Laboratorium Lingkungan PJT</div>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline font-bold">About</Link>
              <Link href="/services" className="hover:underline">Services</Link>
              <Link href="/competence" className="hover:underline">Competence</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Tentang Kami
          </h1>

          {/* Company Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Profil Perusahaan</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                Hello World - Placeholder untuk sejarah singkat perusahaan. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-gray-600">
                Placeholder untuk visi misi perusahaan. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Visi</h3>
                <p className="text-gray-600">
                  Hello World - Placeholder untuk pernyataan visi perusahaan yang inspiratif dan jelas.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Misi</h3>
                <p className="text-gray-600">
                  Hello World - Placeholder untuk pernyataan misi perusahaan yang konkret dan terukur.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Pelajari Lebih Lanjut</h2>
            <div className="space-x-4">
              <Link 
                href="/about/peralatan" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
              >
                Lihat Peralatan
              </Link>
              <Link 
                href="/about/portofolio" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 inline-block"
              >
                Lihat Portfolio
              </Link>
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