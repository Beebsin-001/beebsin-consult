const brandName = "BeebSin Consult";

const whatsappNumber = "2348138284156";
const telegramUsername = "beebsinconsult";
const xUsername = "beebsinconsult";

// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });
}

// AUTOMATIC COPYRIGHT YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// PORTFOLIO FILTERS
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((item) => {
            const isActive = item === button;

            item.classList.toggle("active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });

        projectCards.forEach((card) => {
            const category = card.dataset.category;

            card.hidden =
                selectedFilter !== "all" &&
                category !== selectedFilter;
        });
    });
});

// WHATSAPP CONTACT
const whatsappLink = document.getElementById("whatsappLink");

if (whatsappLink) {
    const message =
        `Hello ${brandName}, I would like to make an enquiry about your services.`;

    whatsappLink.href =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";
}

// SERVICE-SPECIFIC WHATSAPP LINKS
document.querySelectorAll("[data-service]").forEach((link) => {
    const service = link.dataset.service;

    const message =
        `Hello ${brandName}, I am interested in your ${service} service. Please provide more information.`;

    link.href =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    link.target = "_blank";
    link.rel = "noopener noreferrer";
});

// TELEGRAM CONTACT
const telegramLink = document.getElementById("telegramLink");

if (telegramLink) {
    telegramLink.href = `https://t.me/${telegramUsername}`;
    telegramLink.target = "_blank";
    telegramLink.rel = "noopener noreferrer";
}

// X SOCIAL PROFILE
const xLink = document.getElementById("xLink");

if (xLink) {
    xLink.href = `https://x.com/${xUsername}`;
    xLink.target = "_blank";
    xLink.rel = "noopener noreferrer";
}