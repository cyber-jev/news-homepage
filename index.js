const toggle = document.querySelector(".btn-toggle");
const nav = document.querySelector(".nav-bar");
const navIcon = document.querySelector(".icon-menu");
const navIconClose = document.querySelector(".icon-menu_close");
const body = document.querySelector(".body-fade");
const navBarItem = document.querySelectorAll(".nav-bar_item")

toggle.onclick = () => {
	nav.classList.toggle("nav-active");
	navIconClose.classList.toggle("icon-menu_close-active");
	navIcon.classList.toggle("icon-menu-inactive");
	body.classList.toggle("fade");
};

navBarItem.forEach((link) => link.onclick = () => {
	nav.classList.remove("nav-active");
	navIconClose.classList.remove("icon-menu_close-active");
	navIcon.classList.remove("icon-menu-inactive");
	body.classList.remove("fade");
})