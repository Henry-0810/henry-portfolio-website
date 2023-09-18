// server.js
import express from "express";
import { createTransport } from "nodemailer";
import { json, urlencoded } from "body-parser";
import cors from "cors";

const app = express();
const port = 8888; // You can choose a different port

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.post("/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter with your email service credentials
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: "munli2002@gmail.com",
        pass: "henry2002",
      },
    });

    // Set up email data
    const mailOptions = {
      from: "munli2002@gmail.com",
      to: "ml2002study@gmail.com",
      subject: "Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with a success message
    res.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email: " + error);

    // Respond with an error message
    res.status(500).json({ error: "Email sending failed." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
