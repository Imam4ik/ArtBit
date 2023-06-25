const menuItem = document.querySelectorAll('.menu-btn')

const menuRegistration = document.querySelectorAll('.menu-registration')

menuItem.forEach(el => {
	el.addEventListener('mouseover', () => {
		el.classList.add('hover')
	})
	el.addEventListener('mouseout', () => {
		el.classList.remove('hover')
	})
})


// кнопка регистрации
// hover
menuRegistration.forEach(el => {
	const menuRegistrationSpan = el.querySelector('span')

	el.addEventListener('mouseover', () => {
		menuRegistrationSpan.classList.add('hover')
	})
	el.addEventListener('mouseout', () => {
		menuRegistrationSpan.classList.remove('hover')
	})
	// active
	el.addEventListener('mousedown', () => {
		menuRegistrationSpan.classList.add('active')
	})
	el.addEventListener('mouseup', () => {
		menuRegistrationSpan.classList.remove('active')
	})
})

