// Add active class to clicked link
document.querySelectorAll(".nav-link").forEach((link) => {
	link.addEventListener("click", function () {
		document
			.querySelectorAll(".nav-link")
			.forEach((l) => l.classList.remove("active"));
		this.classList.add("active");
	});
});
// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("header nav");

hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");
});

// Close menu when clicking a nav link
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
    });
});