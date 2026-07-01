document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Scrolling for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Smooth scroll effect
                });
            }

            // Close mobile navigation menu after clicking a link
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Toggle 'active' class to show/hide menu
    });

    // --- Dynamic WhatsApp Link (optional, for future expansion) ---
    // Currently, WhatsApp links are hardcoded in HTML for simplicity with single product.
    // This function can be used if you decide to add more dynamic product interactions
    // without a full e-commerce system.
    function updateWhatsAppLink(productName, quantity = 1) {
        const phoneNumber = "YOUR_WHATSAPP_NUMBER"; // Replace with your WhatsApp number
        // Ensure the message is specific to fresh mushrooms
        const message = `Hello FUNGI, I'd like to order ${quantity} kg of Fresh Oyster Mushrooms.`;
        // Select all WhatsApp buttons to update their href
        document.querySelectorAll('.primary-btn.whatsapp-order-btn, .secondary-btn.whatsapp-order-btn').forEach(btn => {
            btn.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        });
    }

    // Call this if needed, for now HTML handles it.
    // updateWhatsAppLink("Fresh Oyster Mushrooms", 1);
});