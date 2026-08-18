import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(_req: NextRequest) {
  // Placeholder for the real SamAI chat backend.
  // Wire this up to Anthropic / your SamAI API and return { reply: string }.
  // Returning an empty reply triggers the "demo offline" message in the UI.
  return NextResponse.json({ reply: '' });
}
