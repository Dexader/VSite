const menuBtn = document.querySelector('.burger-icon');
const burger = document.querySelector('.burger-menu');

menuBtn.addEventListener('mouseover', () => {
	burger.classList.add('active');
});

menuBtn.addEventListener('mouseout', () => {
	burger.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', function() {
	const emailInput = document.getElementById('emailInput');

	emailInput.addEventListener('input', function() {
		this.style.width = 'auto';
		this.style.width = `${this.scrollWidth}px`;
	});
});