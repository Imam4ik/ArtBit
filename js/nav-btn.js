const btnLister6 = document.querySelectorAll('#content__lister-6')
const btnLister9 = document.querySelectorAll('#content__lister-9')
const btnLister7 = document.querySelectorAll('#content__lister-7')


btnLister6.forEach(el => {
	el.addEventListener('click', () => {
		let lister6 = document.querySelector('.content__lister-6')
		let lister6Top = lister6.offsetTop
		
		window.scrollBy(0, lister6Top)
		
	})
})
btnLister9.forEach(el => {
	el.addEventListener('click', () => {
		let lister9 = document.querySelector('.content__lister-9')
		let lister9Top = lister9.offsetTop
		
		window.scrollBy(0, lister9Top - 150)
		
	})
})
btnLister7.forEach(el => {
	el.addEventListener('click', () => {
		let lister7 = document.querySelector('.content__lister-7')
		let lister7Top = lister7.offsetTop
		
		window.scrollBy(0, lister7Top - 100)
		
	})
})
