document.addEventListener('DOMContentLoaded', function() {
	const emailInput = document.getElementById('emailInput');

	emailInput.addEventListener('input', function() {
		this.style.width = 'auto';
		this.style.width = `${this.scrollWidth}px`;
	});
});