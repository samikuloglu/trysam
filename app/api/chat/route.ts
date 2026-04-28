import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(_req: NextRequest) {
  // Placeholder for the real Sam chat backend.
  // Wire this up to Anthropic / your Sam API and return { reply: string }.
  // Returning an empty reply triggers the "demo offline" message in the UI.
  return NextResponse.json({ reply: '' });
}
