const btnNode = document.querySelectorAll('.main-btn')
const btnVector1 = document.querySelector('.main-btn__before')
const btnVector2 = document.querySelector('.main-btn__after')


// HOVER

// btnNode.forEach(el => {
// 	const btnVector1 = el.querySelector('.main-btn__before')
// 	const btnVector2 = el.querySelector('.main-btn__after')

// 	el.addEventListener('mouseover', () => {
// 		btnVector1.classList.add('hove')
// 		btnVector2.classList.add('hove')
// 	})
// 	el.addEventListener('mouseout', () => {
// 		btnVector1.classList.remove('hove')
// 		btnVector2.classList.remove('hove')
// 	})
// })

// CLICK

btnNode.forEach(el => {

	el.addEventListener('mousedown', () => {
		el.classList.add('active')
	})
	
	el.addEventListener('mouseup', () => {
		setTimeout(() => {
			el.classList.remove('active')
		}, 600)
	})
})
