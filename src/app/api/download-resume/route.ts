import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    // Get the absolute path to the PDF file in the public directory
    const filePath = join(process.cwd(), 'public', 'Arun_kumar.pdf');
    
    // Read the file
    const fileBuffer = await readFile(filePath);
    
    // Create response with proper headers
    const response = new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Arun_Kumar_Resume.pdf"',
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'public, max-age=31536000, immutable', // Cache for 1 year
      },
    });
    
    return response;
  } catch (error) {
    console.error('Error serving resume file:', error);
    
    // Return a proper error response
    return new NextResponse(
      JSON.stringify({ 
        error: 'Resume file not found',
        message: 'The requested resume file is currently unavailable. Please try again later or contact the administrator.'
      }),
      {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

// Handle other HTTP methods
export async function POST() {
  return new NextResponse('Method not allowed', { status: 405 });
}

export async function PUT() {
  return new NextResponse('Method not allowed', { status: 405 });
}

export async function DELETE() {
  return new NextResponse('Method not allowed', { status: 405 });
}