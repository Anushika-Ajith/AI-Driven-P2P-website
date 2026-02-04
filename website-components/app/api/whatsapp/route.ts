import { NextResponse } from "next/server"

export async function GET() {
  const phone = process.env.WHATSAPP_NUMBER
  const defaultMsg =
    process.env.WHATSAPP_MESSAGE ||
    "Hello ODIN Technologies! I want to know more about your services."

  if (!phone) {
    return NextResponse.json(
      { error: "WhatsApp number missing in environment variables." },
      { status: 500 }
    )
  }

  // FINAL MESSAGE — only your main message, no page info
  const finalMessage = defaultMsg

  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(finalMessage)}`

  return NextResponse.redirect(url)
}
