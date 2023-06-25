const btnSub = document.querySelectorAll('#subscribe')


let subscribeDone



let popUp = document.createElement('div')
popUp.className = 'popUp_subscribe'
popUp.innerHTML = `
	<div class="subscribe">
		<div class="subscribe-lock">+</div>
		<div class="subscribe-header">Оформить подписку</div>
		<div class="subscribe-content">
			<div class="subscribe-content__typesub">
				<div class="subscribe-content__typesub-text">Тип подписки</div>
				<div class="subscribe-content__typesub-block">
					<div class="subscribe-content__typesub-block__selected">8BIT (на 8 месяцев)</div>
					<div class="subscribe-content__typesub-block__arrow"></div>

					<div class="subscribe-content__typesub-block__select">
						<div class="subscribe-content__typesub-block__select-item">1BIT (на 1 месяц)</div>
						<div class="subscribe-content__typesub-block__select-item">4BIT (на 4 месяца)</div>
						<div class="subscribe-content__typesub-block__select-item">Базовая подписка</div>
					</div>
				</div>
			</div>
			<div class="subscribe-content__prices">
				<div class="subscribe-content__prices-comment"></div>
				<div class="subscribe-content__prices-price"> ₽</div>
			</div>
			<div class="subscribe-content__btn"><div class="main-btn">Оплатить</div></div>
			<div class="subscribe-content__text">
				<p>Ориентировочная стоимость с учетом текщего курса рубля
				точная стоимость <span class="color-main"></span> за подписку на восемь месяцев</p>
			</div>
			<div class="subscribe-line"></div>
		</div>
		<div class="subscribe-footer">
			<div class="subscribe-footer__text">Мы принимаем</div>
			<div class="subscribe-footer__list">
				<div class="subscribe-footer__list-img"><img src="img/image/usdt 2.png"></div>
				<div class="subscribe-footer__list-img"><img src="img/image/eth 2.png"></div>
				<div class="subscribe-footer__list-img"><img src="img/image/btc 2.png"></div>
				<div class="subscribe-footer__list-img"><img src="img/image/image 17.png"></div>
			</div>	
		</div>
	</div>
`

let selected = popUp.querySelector('.subscribe-content__typesub-block__selected')

btnSub.forEach(el => {
	el.addEventListener('click', () => {
		document.body.classList.add('lock')
		document.body.prepend(popUp)
		price()
	})
})
popUp.addEventListener('click', (e) => {
	if(e.target.className == 'popUp_subscribe') {
		document.body.classList.remove('lock')
		document.body.removeChild(popUp)
	}
})
popUp.addEventListener('click', (e) => {
	if(e.target.className == 'subscribe-lock') {
		document.body.classList.remove('lock')
		document.body.removeChild(popUp)
	}
})
popUp.addEventListener('click', (e) => {
	if(e.target.className == 'main-btn') {
		if(selected.textContent == '8BIT (на 8 месяцев)') {
			subscribeDone = '8BIT'
		}
		if(selected.textContent == '1BIT (на 1 месяц)') {
			subscribeDone = '1BIT'
		}
		if(selected.textContent == '4BIT (на 4 месяца)') {
			subscribeDone = '4BIT'
		}
		if(selected.textContent == 'Базовая подписка') {
			subscribeDone = 'Базовая'
		}
		document.body.classList.remove('lock')
		document.body.removeChild(popUp)
	}
})



let typesubBlock = popUp.querySelector('.subscribe-content__typesub-block')
let blockSelect = popUp.querySelector('.subscribe-content__typesub-block__select')

typesubBlock.addEventListener('click', () => {
	typesubBlock.classList.toggle('active')
	blockSelect.classList.toggle('active')
	price()
})




let selectItem = popUp.querySelectorAll('.subscribe-content__typesub-block__select-item').forEach(el => {
	el.addEventListener('click', (e) => {
		let selectItemText = e.target.textContent
		let selectedText = selected.textContent

		selected.innerHTML = selectItemText

		e.target.innerHTML = selectedText
		price()
	})
})


function price() {
	let popUpPricesComment = popUp.querySelector('.subscribe-content__prices-comment')
	let popUpPricesPrice = popUp.querySelector('.subscribe-content__prices-price')
	let popUpPricesInUSDT = popUp.querySelector('.subscribe-content__text .color-main')

	if(selected.textContent == '8BIT (на 8 месяцев)') {
		popUpPricesComment.innerHTML = '30 400 ₽';
		popUpPricesPrice.innerHTML = '22 800 ₽';
		popUpPricesInUSDT.innerHTML = '300 USDT';
	}
	if(selected.textContent == '1BIT (на 1 месяц)') {
		popUpPricesComment.innerHTML = '';
		popUpPricesPrice.innerHTML = '3 800 ₽';
		popUpPricesInUSDT.innerHTML = '50 USDT';
	}
	if(selected.textContent == '4BIT (на 4 месяца)') {
		popUpPricesComment.innerHTML = '12 920 ₽';
		popUpPricesPrice.innerHTML = '11 400 ₽';
		popUpPricesInUSDT.innerHTML = '170 USDT';
	}
	if(selected.textContent == 'Базовая подписка') {
		popUpPricesComment.innerHTML = '';
		popUpPricesPrice.innerHTML = '0 ₽';
		popUpPricesInUSDT.innerHTML = '300 USDT';
	}
}

price()



