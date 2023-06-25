const carousel = document.querySelector(".content__lister-list")
const firstEl = carousel.querySelectorAll(".content__lister-list__el")[0]
const listEls = document.querySelectorAll(".content__lister-list__el")
const menulistItem = document.querySelectorAll(".content__lister-menulist-item")

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff

function autoSlide() {
	if (carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return
	if (carousel.scrollLeft == '0') return

	positionDiff = Math.abs(positionDiff)
	let firstImgWidth = firstEl.clientWidth
	let valDifference = firstImgWidth - positionDiff

	if(carousel.scrollLeft > prevScrollLeft) {
		return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff
	}
	carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff
}


function dragStart(e) {
	isDragStart = true
	prevPageX = e.pageX || e.touches[0].pageX
	prevScrollLeft = carousel.scrollLeft
}

function dragging(e) {
	if (!isDragStart) return
	e.preventDefault()
	isDragging = true
	carousel.classList.add("dragging")
	positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX
	carousel.scrollLeft = prevScrollLeft - positionDiff
}

function dragStop() {
	isDragStart = false
	carousel.classList.remove("dragging")

	if(!isDragging) return
	isDragging = false
	autoSlide()
}

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("touchstart", dragStart)

carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("touchmove", dragging)

carousel.addEventListener("mouseup", dragStop)
carousel.addEventListener("mouseleave", dragStop)
carousel.addEventListener("touchend", dragStop)




menulistItem.forEach(el => {
	el.addEventListener('click', (e) => {
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

		carousel.scrollLeft = listEl.offsetLeft

		
	})
})

carousel.addEventListener("scroll", function listSwipe() {
	if(carousel.scrollLeft <= firstEl.clientWidth/2) {
		menulistItem.forEach(el => {
			el.classList.remove('active')
		})
		menulistItem[0].classList.add('active')
		return
	}
	
	if(carousel.scrollLeft >= firstEl.clientWidth / 2) {
		if(carousel.scrollLeft <= firstEl.clientWidth*2 - firstEl.clientWidth/2) {
			menulistItem.forEach(el => {
				el.classList.remove('active')
			})
			menulistItem[1].classList.add('active')
			return
		}
	}

	if(carousel.scrollLeft >= firstEl.clientWidth*2 - firstEl.clientWidth/2) {
		if(carousel.scrollLeft <= firstEl.clientWidth*3 - firstEl.clientWidth/2) {
			menulistItem.forEach(el => {
				el.classList.remove('active')
			})
			menulistItem[2].classList.add('active')
			return
		}
	}
	
	if(carousel.scrollLeft >= firstEl.clientWidth*3 - firstEl.clientWidth/2) {
		menulistItem.forEach(el => {
			el.classList.remove('active')
		})
		menulistItem[3].classList.add('active')
		return
	}
})


