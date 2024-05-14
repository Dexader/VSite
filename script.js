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
const body = document.body;

openBtnAuth.addEventListener('click', () => {
	authPopup.style.display = 'block';
	modalBackground.style.display = 'block';
	body.style.height = '100vh';
	body.style.overflowY = 'hidden';
});

closeBtn.addEventListener('click', () => {
	authPopup.style.display = 'none';
	modalBackground.style.display = 'none';
	body.style.height = '';
	body.style.overflowY = '';
});

//Search

const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');
const searchContainer = document.querySelector('.search-container');
const windowShadow = document.querySelector('.shadow');

searchIcon.addEventListener('click', () => {
	searchContainer.style.display = 'block';
	windowShadow.style.display = 'block';
	body.style.height = '100vh';
	body.style.overflowY = 'hidden';
});

searchInput.addEventListener('keydown', event => {
	if (event.code === 'Enter') {
		searchInput.value = '';
		searchContainer.style.display = 'none';
		windowShadow.style.display = 'none';
		body.style.height = '';
		body.style.overflowY = '';
	}
});