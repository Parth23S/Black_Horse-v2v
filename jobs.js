

// ===============================
// Career Comeback AI - Jobs Page
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // Search Functionality
    // -------------------------------

    const searchInput = document.querySelector('input[type="text"]');
    const jobCards = document.querySelectorAll(".feature-card");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            jobCards.forEach(card => {

                const text = card.innerText.toLowerCase();

                if (text.includes(value)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }

    // -------------------------------
    // Apply Button
    // -------------------------------

    const applyButtons = document.querySelectorAll(".feature-card .primary-btn");

    applyButtons.forEach(button => {

        button.addEventListener("click", function () {

            const company =
                this.parentElement.querySelector("h3").innerText;

            alert(
                "Application feature will be available soon!\n\nSelected Company:\n" +
                company
            );

        });

    });

    // -------------------------------
    // Smooth Fade-in Animation
    // -------------------------------

    jobCards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(() => {

            card.style.transition = "0.6s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 120);

    });

    // -------------------------------
    // Search Button
    // -------------------------------

    const searchButton = document.querySelector(".dashboard-right .primary-btn");

    if (searchButton) {

        searchButton.addEventListener("click", () => {

            alert("Showing best AI recommended jobs based on your profile.");

        });

    }

});
// END //