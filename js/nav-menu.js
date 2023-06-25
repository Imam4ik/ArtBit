const body = document.body
const nav = document.querySelector('.nav')
const navMenu = document.querySelector('.nav__menu')
const navList = document.querySelector('.nav__list')
const navBurger = document.querySelector('.nav__burger')
const navMyLogin = document.querySelector('.nav__my-login')

navBurger.addEventListener('click', () => {
	body.classList.toggle('lock')
	nav.classList.toggle('active')
	navMenu.classList.toggle('active')
	navList.classList.toggle('active')
	navBurger.classList.toggle('active')
	navMyLogin.classList.toggle('active')
})