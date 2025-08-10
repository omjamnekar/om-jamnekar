import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // In a real app, send email or store in DB here.
    if (!data?.name || !data?.email || !data?.message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
