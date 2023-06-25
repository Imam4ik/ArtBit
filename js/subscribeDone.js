const blockSub = document.querySelector('.content__subscribe-block__sub')
const blockIllumination = document.querySelector('.content__subscribe-block__text span')

popUp.addEventListener('click', (e) => {
	if(e.target.className == 'main-btn') {
		console.log(subscribeDone);
		function subDone() {
			if(subscribeDone) {
				blockSub.textContent = subscribeDone
				blockSub.style.color = '#63E2B7'
				blockIllumination.style.background = '#63E2B7'
				blockIllumination.style.boxShadow = '0px 0px 7px #63E2B7'
			}
		}
		subDone()
	}
})

