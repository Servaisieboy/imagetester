document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".test-image");

    images.forEach(image => {
        image.addEventListener("click", () => {
            images.forEach(img => img.classList.remove("selected"));
            image.classList.add("selected");

            const selectedImage = image.dataset.image;

            // Verstuur de keuze naar het PostgreSQL API-endpoint
            fetch('/api/save_to_pg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ choice: selectedImage })
            }).then(response => response.json())
              .then(data => console.log(data))
              .catch(error => console.error('Error:', error));

            // Doorverwijzen naar de bedankt-pagina
            window.location.href = "thanks.html";
        });
    });
});