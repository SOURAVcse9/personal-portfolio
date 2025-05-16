const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your.sourav.cse9.bu@gmail.com",         // ✅ replace with your Gmail
      pass: "your_app_password_here",       // ✅ use an App Password (not your regular password)
    },
  });

  const mailOptions = {
    from: email,
    to: "your.sourav.cse9.bu@gmail.com",             // ✅ your Gmail again
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("✅ Message sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("❌ Error sending message.");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

