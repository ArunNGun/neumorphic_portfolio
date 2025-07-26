import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // For Vercel, we need to handle the file path differently
    // In production, files are in a different location
    let filePath: string;
    
    if (process.env.NODE_ENV === 'production') {
      // In Vercel production, public files are served from the root
      filePath = path.join(process.cwd(), 'public', 'Arun_Kumar.pdf');
    } else {
      // In development
      filePath = path.join(process.cwd(), 'public', 'Arun_Kumar.pdf');
    }
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error('File not found at:', filePath);
      throw new Error('File not found');
    }
    
    // Read the file synchronously for better Vercel compatibility
    const fileBuffer = fs.readFileSync(filePath);
    
    // Create response with proper headers
    const response = new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Arun_Kumar_Resume.pdf"',
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
    
    return response;
  } catch (error) {
    console.error('Error serving resume file:', error);
    
    // Return a proper error response
    return new NextResponse(
      JSON.stringify({
        error: 'Resume file not found',
        message: 'The requested resume file is currently unavailable. Please try again later or contact the administrator.',
        debug: process.env.NODE_ENV === 'development' ? {
          cwd: process.cwd(),
          env: process.env.NODE_ENV,
          error: error instanceof Error ? error.message : 'Unknown error'
        } : undefined
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