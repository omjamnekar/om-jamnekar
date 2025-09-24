// // app/api/contact/route.ts
// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const data = await req.json();

//     await resend.emails.send({
//       from: "Portfolio Contact <onboarding@resend.dev>", // keep this sender for now
//       to: "your-email@example.com", // <-- replace with your email
//       subject: "New Hiring Request",
//       text: `
//         Name: ${data.name}
//         Email: ${data.email}
//         Company: ${data.company || "-"}
//         Position: ${data.position || "-"}
//         Budget: ${data.budget || "-"}
//         Timeline: ${data.timeline || "-"}
//         Message: ${data.message}
//       `,
//     });

//     return NextResponse.json(
//       { message: "Email sent successfully!" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { message: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }
