import Link from "next/link";

export default function Home() {
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

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Selamat Datang di Laboratorium Lingkungan PJT
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Hello World - Placeholder untuk deskripsi singkat perusahaan
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Layanan Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Analisis Air</h3>
              <p className="text-gray-600">Placeholder untuk deskripsi layanan analisis air</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Analisis Udara</h3>
              <p className="text-gray-600">Placeholder untuk deskripsi layanan analisis udara</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Layanan Lainnya</h3>
              <p className="text-gray-600">Placeholder untuk deskripsi layanan lainnya</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Laboratorium Lingkungan PJT. Hello World Footer.</p>
        </div>
      </footer>
    </div>
  );
}
