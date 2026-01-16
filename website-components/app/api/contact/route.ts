import { NextResponse } from "next/server"
console.log("BREVO KEY EXISTS:", !!process.env.BREVO_API_KEY)

export async function POST(req: Request) {
  try {
    const { email, phone, firstName, lastName, message } = await req.json()

    if (!email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: {
          name: "ODIN Technologies",
          email: process.env.CONTACT_SENDER_EMAIL, // ✅ verified
        },
        to: [
          {
            email: process.env.CONTACT_RECEIVER_EMAIL,
            name: "Admin",
          },
        
        ],
        replyTo: {
          email, // ✅ USER EMAIL HERE
          name: `${firstName} ${lastName}`,
        },
        subject: "New Contact Form Submission",
        htmlContent: `
          <h3>New Contact Message</h3>
          <p><b>Name:</b> ${firstName} ${lastName}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Message:</b></p>
          <p>${message}</p>
          <hr />
          <p>
            <b>ODIN Technologies</b><br/>
            📞 ${process.env.COMPANY_PHONE}<br/>
            ✉️ ${process.env.CONTACT_SENDER_EMAIL}
          </p>
        `,
      }),
    })
    

    if (!res.ok) {
        const errorText = await res.text()
        console.error("BREVO ERROR:", errorText)
      
        return NextResponse.json(
          { error: "Brevo email failed", details: errorText },
          { status: 500 }
        )
      }
      

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}
