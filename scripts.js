function includeHTML() {
    const elements = document.querySelectorAll('[include-html]');
    elements.forEach(async (element) => {
        const file = element.getAttribute('include-html');
        if (file) {
            try {
                const response = await fetch(file);
                if (!response.ok) {
                    element.innerHTML = "Error al cargar la página.";
                    return;
                }
                const text = await response.text();
                element.innerHTML = text;
                element.removeAttribute('include-html');
                includeHTML();
            } catch (error) {
                element.innerHTML = "Error al cargar la página.";
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);
