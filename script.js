//Burger

const menuBtn = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger-menu');

menuBtn.addEventListener('mouseover', () => {
	burgerMenu.classList.add('active');
});

burgerMenu.addEventListener('mouseleave', () => {
	burgerMenu.classList.remove('active');
});

const menuLinks = burgerMenu.querySelectorAll('.burger-menu__link');

menuLinks.forEach(link => {
	link.addEventListener('click', (e) => {
		burgerMenu.classList.remove('active');
	});
});

//Responsive input

document.addEventListener('DOMContentLoaded', function() {
	const emailInput = document.getElementById('emailInput');

	emailInput.addEventListener('input', function() {
		this.style.width = 'auto';
		this.style.width = `${this.scrollWidth}px`;
	});
});

//Popup auth

const authPopup = document.querySelector('.auth-popup');
const openBtnAuth = document.querySelector('.open-auth');
const closeBtn = document.querySelector('.close-btn');
const modalBackground = document.querySelector('.modal-background');

openBtnAuth.addEventListener('click', () => {
	authPopup.style.display = 'block';
	modalBackground.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
	authPopup.style.display = 'none';
	modalBackground.style.display = 'none';
});