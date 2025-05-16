// Contact Form Submission with Confirmation
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = {
        name: contactForm.name.value,
        email: contactForm.email.value,
        message: contactForm.message.value,
      };

      try {
        if (!confirm("Are you sure you want to send this message?")) {
          return; // ⛔ User canceled sending
        }

        const response = await fetch("http://localhost:3000/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const msg = await response.text();
        alert(msg); // ✅ Shows server response
        contactForm.reset();
      } catch (err) {
        alert("There was an error sending your message. Please try again later.");
        console.error(err);
      }
    });
  }
});
