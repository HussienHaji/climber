const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navBar = document.querySelector(".navbar");
const allLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
	navLinks.classList.toggle("activeBar");
});

allLinks.forEach((link) => {
	link.addEventListener("click", setActiveLink);
});

function setActiveLink(e) {
	allLinks.forEach((link) => link.classList.remove("active"));
	e.currentTarget.classList.add("active");
	navLinks.classList.remove("activeBar");
}

window.addEventListener("scroll", (e) => {
	const scroll = e.target.scrollingElement.scrollTop;
	const screenHeight = e.target.scrollingElement.clientHeight;
	if (scroll < screenHeight) {
		navBar.classList.remove("fix");
	}
	if (scroll > screenHeight) {
		navBar.classList.add("fix");
	}
});
