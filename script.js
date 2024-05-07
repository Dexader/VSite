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