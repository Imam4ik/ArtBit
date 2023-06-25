
const slider = document.querySelector(".content__list-users")
const firstElement = document.querySelectorAll(".content__list-users__user")[0]
const arrowBtns = document.querySelectorAll(".user-slider-vector");


arrowBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		let firstImgWidth = firstElement.clientWidth + 72;
		console.log(btn.id)
		slider.scrollLeft += btn.id == 'right' ? firstImgWidth : -firstImgWidth
	})
})
slider.addEventListener('scroll', () => {
	arrowBtns.forEach(el => [
		el.classList.remove('lock')
	])
	if (slider.scrollLeft == (slider.scrollWidth - slider.clientWidth)) {
		arrowBtns[1].classList.add('lock')
	}
	if (slider.scrollLeft == '0')  {
		arrowBtns[0].classList.add('lock')
	}
})
arrowBtns.forEach(el => [
	el.classList.remove('lock')
])
if (slider.scrollLeft == (slider.scrollWidth - slider.clientWidth)) {
	arrowBtns[1].classList.add('lock')
}
if (slider.scrollLeft == '0')  {
	arrowBtns[0].classList.add('lock')
}

// function autoSlide() {
// 	if (slider.scrollLeft == (slider.scrollWidth - slider.clientWidth)) return
// 	if (slider.scrollLeft == '0') return

// 	positionDiff = Math.abs(positionDiff)
// 	let firstImgWidth = firstElement.clientWidth + 72
// 	let valDifference = firstImgWidth - positionDiff

// 	if(slider.scrollLeft > prevScrollLeft) {
// 		return slider.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff
// 	}
// 	slider.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff
// }


// function dragStart(e) {
// 	isDragStart = true
// 	prevPageX = e.pageX || e.touches[0].pageX
// 	prevScrollLeft = slider.scrollLeft
// }

// function dragging(e) {
// 	if (!isDragStart) return
// 	e.preventDefault()
// 	isDragging = true
// 	slider.classList.add("dragging")
// 	positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX
// 	slider.scrollLeft = prevScrollLeft - positionDiff
// }

// function dragStop() {
// 	isDragStart = false
// 	slider.classList.remove("dragging")

// 	if(!isDragging) return
// 	isDragging = false
// 	autoSlide()
// }

// slider.addEventListener("mousedown", dragStart)
// slider.addEventListener("touchstart", dragStart)

// slider.addEventListener("mousemove", dragging)
// slider.addEventListener("touchmove", dragging)

// slider.addEventListener("mouseup", dragStop)
// slider.addEventListener("mouseleave", dragStop)
// slider.addEventListener("touchend", dragStop)