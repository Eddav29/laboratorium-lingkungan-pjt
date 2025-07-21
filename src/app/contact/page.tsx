import React from "react";

export default function ContactPage() {
    return (
        <main className="max-w-xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Kontak Kami</h1>
            <p className="mb-6">
                Silakan hubungi kami melalui formulir di bawah ini atau melalui email di <a href="mailto:info@example.com" className="text-blue-600 underline">info@example.com</a>.
            </p>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block font-medium mb-1">Nama</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-medium mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block font-medium mb-1">Pesan</label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full border rounded px-3 py-2"
                        rows={5}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Kirim
                </button>
            </form>
        </main>
    );
}