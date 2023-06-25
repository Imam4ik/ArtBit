const drop = document.querySelector('.content__currency-currency__drop')
const dropSelect = document.querySelector('.content__currency-currency__drop-select')
const dropArrow = document.querySelector('.content__currency-currency__drop-arrow')

const dropItems = document.querySelector('.content__currency-currency__drop-items')
const dropItemsItem = document.querySelectorAll('.content__currency-currency__drop-items__item')


dropSelect.addEventListener('mouseover', () => {
	dropSelect.classList.add('hover')
	dropArrow.classList.add('hover')
})
dropSelect.addEventListener('mouseout', () => {
	dropSelect.classList.remove('hover')
	dropArrow.classList.remove('hover')
})
dropArrow.addEventListener('mouseover', () => {
	dropSelect.classList.add('hover')
	dropArrow.classList.add('hover')
})
dropArrow.addEventListener('mouseout', () => {
	dropSelect.classList.remove('hover')
	dropArrow.classList.remove('hover')
})

// CLICK CLICK CLICK CLICK CLICK CLICK CLICK CLICK CLICK

drop.addEventListener('click', () => {
	dropItems.classList.toggle('active')
	
	dropArrow.classList.toggle('active')
})

// SELECTED SELECTED SELECTED SELECTED SELECTED SELECTED SELECTED 

dropItemsItem.forEach(el => {

	el.addEventListener('click', (e) => {
		let textDropItemsItem = e.target.innerHTML
		let textDropSelect = dropSelect.innerHTML
		
		dropSelect.innerHTML = `${textDropItemsItem}`

		e.target.innerHTML = `${textDropSelect}`
	})
})










const drop2 = document.querySelectorAll('.content__conditions-item__drop')[0]
const dropSelect2 = document.querySelectorAll('.content__conditions-item__drop-select')[0]
const dropArrow2 = document.querySelectorAll('.content__conditions-item__drop-arrow')[0]

const dropItems2 = document.querySelectorAll('.content__conditions-item__drop-items')[0]
const dropItemsItem2 = document.querySelectorAll('.content__conditions-item__drop-items__item')


dropSelect2.addEventListener('mouseover', () => {
	dropSelect2.classList.add('hover')
	dropArrow2.classList.add('hover')
})
dropSelect2.addEventListener('mouseout', () => {
	dropSelect2.classList.remove('hover')
	dropArrow2.classList.remove('hover')
})
dropArrow2.addEventListener('mouseover', () => {
	dropSelect2.classList.add('hover')
	dropArrow2.classList.add('hover')
})
dropArrow2.addEventListener('mouseout', () => {
	dropSelect2.classList.remove('hover')
	dropArrow2.classList.remove('hover')
})

// CLICK CLICK CLICK CLICK CLICK CLICK CLICK CLICK CLICK

drop2.addEventListener('click', () => {
	dropItems2.classList.toggle('active')
	
	dropArrow2.classList.toggle('active')
})

// SELECTED SELECTED SELECTED SELECTED SELECTED SELECTED SELECTED 

dropItems2.querySelectorAll('.content__conditions-item__drop-items__item').forEach(el => {

	el.addEventListener('click', (e) => {
		let textDropItemsItem2 = e.target.innerHTML
		let textDropSelect2 = dropSelect2.innerHTML
		
		dropSelect2.innerHTML = `${textDropItemsItem2}`

		e.target.innerHTML = `${textDropSelect2}`
	})
})









const drop3 = document.querySelectorAll('.content__conditions-item__drop')[1]
const dropSelect3 = document.querySelectorAll('.content__conditions-item__drop-select')[1]
const dropArrow3 = document.querySelectorAll('.content__conditions-item__drop-arrow')[1]

const dropItems3 = document.querySelectorAll('.content__conditions-item__drop-items')[1]
const dropItemsItem3 = document.querySelectorAll('.content__conditions-item__drop-items__item')


dropSelect3.addEventListener('mouseover', () => {
	dropSelect3.classList.add('hover')
	dropArrow3.classList.add('hover')
})
dropSelect3.addEventListener('mouseout', () => {
	dropSelect3.classList.remove('hover')
	dropArrow3.classList.remove('hover')
})
dropArrow3.addEventListener('mouseover', () => {
	dropSelect3.classList.add('hover')
	dropArrow3.classList.add('hover')
})
dropArrow3.addEventListener('mouseout', () => {
	dropSelect3.classList.remove('hover')
	dropArrow3.classList.remove('hover')
})

// CLICK CLICK CLICK CLICK CLICK CLICK CLICK CLICK CLICK

drop3.addEventListener('click', () => {
	dropItems3.classList.toggle('active')
	
	dropArrow3.classList.toggle('active')
})

// SELECTED SELECTED SELECTED SELECTED SELECTED SELECTED SELECTED 

dropItems3.querySelectorAll('.content__conditions-item__drop-items__item').forEach(el => {

	el.addEventListener('click', (e) => {
		let textDropItemsItem3 = e.target.innerHTML
		let textDropSelect3 = dropSelect3.innerHTML
		
		dropSelect3.innerHTML = `${textDropItemsItem3}`

		e.target.innerHTML = `${textDropSelect3}`
	})
})