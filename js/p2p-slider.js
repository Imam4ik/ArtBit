const slider = document.querySelector('.content__find-slider')

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff


slider.addEventListener('scroll', () => {
	const arrowBtns = document.querySelectorAll(".content__find-vectors__img");
	arrowBtns.forEach(el => [
		el.classList.remove('lock')
	])
	if (slider.scrollLeft == (slider.scrollWidth - slider.clientWidth)) {
		arrowBtns[0].classList.add('lock')
	}
	if (slider.scrollLeft == '0')  {
		arrowBtns[1].classList.add('lock')
	}
})

btnFind.addEventListener('click', () => {
	setTimeout(arrowbtn, 600)
})
	
btnFind.addEventListener('click', () => {
	setTimeout(arrowLock, 600)
	
})
btnFind.addEventListener('click', () => {
	setTimeout(menuListClasses, 600)
})
	







function autoSlide() {
	const firstEl = slider.querySelectorAll(".content__find-slider__slide")[0]
	if (slider.scrollLeft == (slider.scrollWidth - slider.clientWidth)) return
	if (slider.scrollLeft == '0') return

	positionDiff = Math.abs(positionDiff)
	let firstImgWidth = firstEl.clientWidth + 20
	let valDifference = firstImgWidth - positionDiff

	if(slider.scrollLeft > prevScrollLeft) {
		return slider.scrollLeft += positionDiff > firstImgWidth / 5 ? valDifference : -positionDiff
	}
	slider.scrollLeft -= positionDiff > firstImgWidth / 5 ? valDifference : -positionDiff
}


function dragStart(e) {
	isDragStart = true
	prevPageX = e.pageX || e.touches[0].pageX
	prevScrollLeft = slider.scrollLeft
}

function dragging(e) {
	if (!isDragStart) return
	e.preventDefault()
	isDragging = true
	slider.classList.add("dragging")
	positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX
	slider.scrollLeft = prevScrollLeft - positionDiff
}

function dragStop() {
	isDragStart = false
	slider.classList.remove("dragging")

	if(!isDragging) return
	isDragging = false
	autoSlide()
}

slider.addEventListener("mousedown", dragStart)
slider.addEventListener("touchstart", dragStart)

slider.addEventListener("mousemove", dragging)
slider.addEventListener("touchmove", dragging)

slider.addEventListener("mouseup", dragStop)
slider.addEventListener("mouseleave", dragStop)
slider.addEventListener("touchend", dragStop)



slider.addEventListener("scroll", function listSwipe() {
	const firstEl = slider.querySelectorAll(".content__find-slider__slide")[0]
	const menulistItem = document.querySelectorAll(".content__find-menuslide-item")

	if(slider.scrollLeft <= firstEl.clientWidth/2) {
		menulistItem.forEach(el => {
			el.classList.remove('active')
		})
		menulistItem[0].classList.add('active')
		return
	}
	
	if(slider.scrollLeft >= firstEl.clientWidth / 2) {
		if(slider.scrollLeft <= firstEl.clientWidth*2 - firstEl.clientWidth/2) {
			menulistItem.forEach(el => {
				el.classList.remove('active')
			})
			menulistItem[1].classList.add('active')
			return
		}
	}

	if(slider.scrollLeft >= firstEl.clientWidth*2 - firstEl.clientWidth/2) {
		if(slider.scrollLeft <= firstEl.clientWidth*3 - firstEl.clientWidth/2) {
			menulistItem.forEach(el => {
				el.classList.remove('active')
			})
			menulistItem[2].classList.add('active')
			return
		}
	}
	
	if(slider.scrollLeft >= firstEl.clientWidth*3 - firstEl.clientWidth/2) {
		menulistItem.forEach(el => {
			el.classList.remove('active')
		})
		menulistItem[3].classList.add('active')
		return
	}
})











function arrowbtn() {
	const arrowBtns = document.querySelectorAll(".content__find-vectors__img");
	arrowBtns.forEach(btn => {
		btn.addEventListener('click', () => {	
			const firstEl = slider.querySelectorAll(".content__find-slider__slide")[0]
			let firstImgWidth = firstEl.clientWidth + 20;
			slider.scrollLeft += btn.id == 'next' ? firstImgWidth : -firstImgWidth
		})
	})
}


function arrowLock() {
	const arrowBtns = document.querySelectorAll(".content__find-vectors__img");

	arrowBtns.forEach(el => [
		el.classList.remove('lock')
	])
	if (slider.scrollLeft == (slider.scrollWidth - slider.clientWidth)) {
		arrowBtns[0].classList.add('lock')
	}
	if (slider.scrollLeft == '0')  {
		arrowBtns[1].classList.add('lock')
	}
}


function menuListClasses() {
	const menulistItem = document.querySelectorAll(".content__find-menuslide-item")
	menulistItem[0].classList.add('active')

	menulistItem.forEach(el => {
		el.addEventListener('click', (e) => {
			const listEls = document.querySelectorAll(".content__find-slider__slide")
			const menulistItem = document.querySelectorAll(".content__find-menuslide-item")
	
			var currentTabs = e.target
			let currentId = e.target.dataset.slide
			var listEl = document.querySelector(`${currentId}`)
	
			menulistItem.forEach(el => {
				el.classList.remove('active')
			})
	
			currentTabs.classList.add('active')
	
			listEls.forEach(el => {
				el.classList.remove('active')
			})
	
			listEl.classList.add('active')
	
			slider.scrollLeft = listEl.offsetLeft
		})
	})
}