"use client";

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apa saja layanan yang disediakan oleh Laboratorium Lingkungan Perum Jasa Tirta I?",
      answer: "Kami menyediakan berbagai layanan pengujian lingkungan meliputi analisis air (fisika, kimia, mikrobiologi), analisis udara ambient dan emisi, pengukuran kebisingan, analisis udara lingkungan kerja, dan analisis mikrobiologi."
    },
    {
      question: "Apakah laboratorium sudah terakreditasi?",
      answer: "Ya, laboratorium kami telah terakreditasi ISO/IEC 17025:2017 oleh KAN (LP-1646-IDN), teregistrasi KLHK (00015/LPJ/LABLING-1/LRK/KLHK), dan ditunjuk sebagai perusahaan Jasa K3 KEMENAKER (5/301/AS.0102/XI/2023)."
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk mendapatkan hasil analisis?",
      answer: "Waktu analisis bervariasi tergantung jenis pengujian. Umumnya berkisar 3-7 hari kerja untuk analisis rutin, sedangkan untuk pengujian khusus dapat membutuhkan waktu 7-14 hari kerja."
    },
    {
      question: "Bagaimana cara mengambil sampel yang benar?",
      answer: "Kami menyediakan layanan pengambilan sampel oleh tenaga ahli tersertifikasi, atau dapat memberikan panduan teknis untuk pengambilan sampel mandiri sesuai dengan standar yang berlaku."
    },
    {
      question: "Apakah hasil analisis dapat digunakan untuk keperluan legal/hukum?",
      answer: "Ya, karena laboratorium kami terakreditasi KAN dan teregistrasi KLHK, hasil analisis kami dapat digunakan untuk keperluan legal, regulasi, dan compliance terhadap peraturan lingkungan."
    },
    {
      question: "Berapa biaya untuk analisis laboratorium?",
      answer: "Biaya analisis bervariasi tergantung jenis parameter yang diuji dan kompleksitas pengujian. Silakan hubungi kami untuk mendapatkan penawaran yang sesuai dengan kebutuhan Anda."
    },
    {
      question: "Apakah laboratorium melayani pengujian untuk seluruh Indonesia?",
      answer: "Ya, kami melayani pengujian untuk seluruh wilayah Indonesia. Untuk wilayah di luar Jawa Timur, kami dapat mengatur pengambilan sampel atau koordinasi pengiriman sampel."
    },
    {
      question: "Bagaimana cara menghubungi laboratorium untuk konsultasi?",
      answer: "Anda dapat menghubungi kami melalui telepon, email, atau mengunjungi kantor kami langsung. Tim customer service kami siap memberikan konsultasi dan informasi yang Anda butuhkan."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan Yang Sering Diajukan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang layanan laboratorium kami
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <svg
                        className="w-5 h-5 text-blue-600 transform transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-gray-400 transform transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5 animate-fadeIn">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Masih ada pertanyaan lain?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Hubungi Kami
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;