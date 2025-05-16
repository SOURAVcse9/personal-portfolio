
  const form = document.getElementById('contactForm');
  const statusText = document.getElementById('form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent form from submitting normally

    const formData = new FormData(form);

    fetch('https://formsubmit.co/ajax/sourav.cse9.bu@gmail.com', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
    .then(response => {
      if (response.ok) {
        statusText.textContent = "Message sent successfully!";
        statusText.style.color = "limegreen";
        form.reset(); // clear form
      } else {
        return response.json().then(data => {
          throw new Error(data.message || "Something went wrong.");
        });
      }
    })
    .catch(error => {
      statusText.textContent = error.message;
      statusText.style.color = "red";
    });
  });

