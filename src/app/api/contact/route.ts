import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, branch } = body;

    // Validasi input
    if (!name || !email || !subject || !message || !branch) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    // Validasi email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      );
    }

    // Di sini Anda bisa menambahkan logika untuk mengirim email
    // atau menyimpan ke database
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      branch,
      timestamp: new Date().toISOString()
    });

    // Response sukses
    return NextResponse.json(
      { message: 'Pesan berhasil dikirim' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint is working' },
    { status: 200 }
  );
}