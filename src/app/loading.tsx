export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Memuat Halaman</h2>
        <p className="text-gray-600">Harap tunggu sebentar...</p>
      </div>
    </div>
  )
}
