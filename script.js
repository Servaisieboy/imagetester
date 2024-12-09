document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".test-image");

    images.forEach(image => {
        image.addEventListener("click", () => {
            images.forEach(img => img.classList.remove("selected"));
            image.classList.add("selected");

            const selectedImage = image.dataset.image;
            localStorage.setItem("selectedImage", selectedImage);

            // Simulatie van data naar server sturen via een POST request
            fetch('/save_choice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ choice: selectedImage })
            });

            // Doorverwijzen naar de bedankt-pagina
            window.location.href = "thanks.html";
        });
    });
});