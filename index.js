const toggle = document.querySelector(".btn-toggle");
const nav = document.querySelector(".nav-bar");
const navIcon = document.querySelector(".icon-menu");
const navIconClose = document.querySelector(".icon-menu_close");
const body = document.querySelector(".body-fade");

toggle.onclick = () => {
	nav.classList.toggle("nav-active");
	navIconClose.classList.toggle("icon-menu_close-active");
	navIcon.classList.toggle("icon-menu-inactive");
	body.classList.toggle("fade");
};
