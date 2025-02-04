javascript;
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Здесь вы можете добавить код для отправки данных на сервер или их обработки
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    alert("Thank you for your message! We will get back to you soon.");
  });
