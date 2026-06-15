import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for sending booking notifications via Resend
  app.post("/api/book", async (req, res) => {
    try {
      const { booking } = req.body;
      if (!booking) {
        return res.status(400).json({ error: "Booking details are required" });
      }

      const resendApiKey = process.env.RESEND_API_KEY;
      const adminEmail = process.env.ADMIN_RECEIVER_EMAIL;

      if (!resendApiKey) {
        console.warn("RESEND_API_KEY environment variable is not defined on the server side.");
        return res.json({
          success: true,
          status: "saved_locally_only",
          message: "Note: Booking was saved locally, but no booking email was sent as RESEND_API_KEY is not set."
        });
      }

      const resend = new Resend(resendApiKey);
      const recipient = adminEmail || "cesaresmero2@gmail.com";
      
      const formattedDate = new Date(booking.date).toLocaleDateString("en-GB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });

      // Construct a premium professional email to notify the clinic/practitioner
      const adminEmailResponse = await resend.emails.send({
        from: "Confidence & Glow <onboarding@resend.dev>",
        to: recipient,
        subject: `New Appointment Request: ${booking.treatmentTitle} (${booking.patientName})`,
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #6b7152; border-radius: 12px; background-color: #FAF7F2; color: #1e293b;">
            <div style="text-align: center; border-bottom: 2px solid #6b7152; padding-bottom: 16px; margin-bottom: 20px;">
              <h2 style="color: #4a7c7c; margin: 0 0 4px 0; font-family: serif; font-size: 24px;">Confidence & Glow Aesthetics</h2>
              <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #6b7152; margin: 0; font-weight: bold;">New Consultation Booking Portal</p>
            </div>
            
            <p style="font-size: 14px; line-height: 1.6; color: #334155;">
              Hello Mantas,
            </p>
            <p style="font-size: 14px; line-height: 1.6; color: #334155; margin-bottom: 20px;">
              A new reservation has been made on your website. Here is the clinical booking assessment and scheduling data:
            </p>
            
            <table style="width: 100%; border-collapse: separate; border-spacing: 0; margin-bottom: 24px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
              <thead>
                <tr style="background-color: #6b7152; color: #ffffff;">
                  <th colspan="2" style="padding: 12px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; text-align: left;">
                    Booking Reference: ${booking.id}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style="background-color: #FCFAF5;">
                  <td style="padding: 12px; font-size: 13px; font-weight: bold; border-bottom: 1px solid #e2e8f0; width: 35%; color: #475569;">Patient Name:</td>
                  <td style="padding: 12px; font-size: 13px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 500;">${booking.patientName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; font-size: 13px; font-weight: bold; border-bottom: 1px solid #e2e8f0; color: #475569;">Treatment Chosen:</td>
                  <td style="padding: 12px; font-size: 13px; border-bottom: 1px solid #e2e8f0; color: #4a7c7c; font-weight: bold;">${booking.treatmentTitle}</td>
                </tr>
                <tr style="background-color: #FCFAF5;">
                  <td style="padding: 12px; font-size: 13px; font-weight: bold; border-bottom: 1px solid #e2e8f0; color: #475569;">Contact Email:</td>
                  <td style="padding: 12px; font-size: 13px; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><a href="mailto:${booking.email}" style="color: #4a7c7c; text-decoration: none;">${booking.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px; font-size: 13px; font-weight: bold; border-bottom: 1px solid #e2e8f0; color: #475569;">Mobile Number:</td>
                  <td style="padding: 12px; font-size: 13px; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><a href="tel:${booking.phone}" style="color: #4a7c7c; text-decoration: none;">${booking.phone}</a></td>
                </tr>
                <tr style="background-color: #FCFAF5;">
                  <td style="padding: 12px; font-size: 13px; font-weight: bold; border-bottom: 1px solid #e2e8f0; color: #475569;">Selected Date:</td>
                  <td style="padding: 12px; font-size: 13px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 500;">${formattedDate}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; font-size: 13px; font-weight: bold; border-bottom: 1px solid #e2e8f0; color: #475569;">Preferred Hours:</td>
                  <td style="padding: 12px; font-size: 13px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${booking.timeSlot}</td>
                </tr>
                <tr style="background-color: #FCFAF5;">
                  <td style="padding: 12px; font-size: 13px; font-weight: bold; color: #475569; vertical-align: top;">Target Concerns:</td>
                  <td style="padding: 12px; font-size: 13px; color: #334155; font-style: italic; line-height: 1.4;">${booking.skinConcerns || "No specific concerns discussed."}</td>
                </tr>
              </tbody>
            </table>

            <div style="background-color: #6b7152/10; border-left: 3px solid #4a7c7c; padding: 12px; margin-bottom: 24px; border-radius: 4px;">
              <p style="margin: 0; font-size: 12px; color: #475569; line-height: 1.5;">
                <strong>Next Step:</strong> Review this schedule. You can easily click the client's email or phone number above to reach out for confirmation or consultation notes.
              </p>
            </div>

            <div style="text-align: center; border-top: 1px dashed #cbd5e1; padding-top: 16px; margin-top: 24px; font-size: 11px; color: #94a3b8;">
              This notification was generated automatically by Confidence & Glow Aesthetics Portal.
            </div>
          </div>
        `
      });

      return res.json({
        success: true,
        status: "email_sent",
        data: adminEmailResponse
      });

    } catch (error: any) {
      console.error("Resend notification failed:", error);
      return res.status(500).json({ error: error.message || "Failed to trigger booking emails." });
    }
  });

  // Serve static assets or use Vite in dev
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
