// src/app/[slug]/route.js
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { slug } = params;
  
  if (!slug) {
    return NextResponse.json({ error: 'No slug provided' }, { status: 400 });
  }
  
  // Redirect ke backend
  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/${slug}`);
}