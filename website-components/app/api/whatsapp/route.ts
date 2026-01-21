import { NextResponse } from "next/server"

export async function GET() {
  const phone = process.env.WHATSAPP_NUMBER
  const msg = process.env.WHATSAPP_MESSAGE

  if (!phone) {
    return NextResponse.json(
      { error: "WhatsApp number missing" },
      { status: 500 }
    )
  }

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(msg || "")}`

  return NextResponse.redirect(url)
}
