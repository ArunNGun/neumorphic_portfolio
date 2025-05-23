import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
  try {
    // Path to the PDF file in the public directory
    const filePath = path.join(process.cwd(), 'public', 'Arun_kumar.pdf');
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return new NextResponse('File not found', { status: 404 });
    }

    // Read the file
    const fileBuffer = fs.readFileSync(filePath);
    
    // Create response with proper headers
    const response = new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Arun_Kumar_Resume.pdf"',
        'Content-Length': fileBuffer.length.toString(),
      },
    });

    return response;
  } catch (error) {
    console.error('Error downloading resume:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}