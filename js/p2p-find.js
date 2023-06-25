
const btnFind = document.querySelector('.content__btn-button')
const findSlider = document.querySelector('.content__find-slider')
const findMenuslide = document.querySelector('.content__find-menuslide')
const findVectors = document.querySelector('.content__find-vectors')

const foundOffers = [
	{price: 76, platform: 'Binance', bank: 'Tinkoff'},
	{price: 76, platform: 'Binance', bank: 'Сбербанк'},
	{price: 76, platform: 'Binance', bank: 'QIWI'},
	{price: 76, platform: 'Binance', bank: 'Райфайзен'},
	{price: 76, platform: 'Binance', bank: 'Альфа'},

	{price: 70.6, platform: 'Binance', bank: 'Tinkoff'},
	{price: 70.6, platform: 'Binance', bank: 'Сбербанк'},
	{price: 70.6, platform: 'Binance', bank: 'QIWI'},
	{price: 70.6, platform: 'Binance', bank: 'Райфайзен'},
	{price: 70.6, platform: 'Binance', bank: 'Альфа'},

	{price: 76, platform: 'OKX', bank: 'Tinkoff'},
	{price: 76, platform: 'OKX', bank: 'Сбербанк'},
	{price: 76, platform: 'OKX', bank: 'QIWI'},
	{price: 76, platform: 'OKX', bank: 'Райфайзен'},
	{price: 76, platform: 'OKX', bank: 'Альфа'},

	{price: 70.6, platform: 'OKX', bank: 'Tinkoff'},
	{price: 70.6, platform: 'OKX', bank: 'Сбербанк'},
	{price: 70.6, platform: 'OKX', bank: 'QIWI'},
	{price: 70.6, platform: 'OKX', bank: 'Райфайзен'},
	{price: 70.6, platform: 'OKX', bank: 'Альфа'},

	{price: 76, platform: 'ByBit', bank: 'Tinkoff'},
	{price: 76, platform: 'ByBit', bank: 'Сбербанк'},
	{price: 76, platform: 'ByBit', bank: 'QIWI'},
	{price: 76, platform: 'ByBit', bank: 'Райфайзен'},
	{price: 76, platform: 'ByBit', bank: 'Альфа'},

	{price: 70.6, platform: 'ByBit', bank: 'Tinkoff'},
	{price: 70.6, platform: 'ByBit', bank: 'Сбербанк'},
	{price: 70.6, platform: 'ByBit', bank: 'QIWI'},
	{price: 70.6, platform: 'ByBit', bank: 'Райфайзен'},
	{price: 70.6, platform: 'ByBit', bank: 'Альфа'},

	{price: 76, platform: 'Huobi', bank: 'Tinkoff'},
	{price: 76, platform: 'Huobi', bank: 'Сбербанк'},
	{price: 76, platform: 'Huobi', bank: 'QIWI'},
	{price: 76, platform: 'Huobi', bank: 'Райфайзен'},
	{price: 76, platform: 'Huobi', bank: 'Альфа'},

	{price: 70.6, platform: 'Huobi', bank: 'Tinkoff'},
	{price: 70.6, platform: 'Huobi', bank: 'Сбербанк'},
	{price: 70.6, platform: 'Huobi', bank: 'QIWI'},
	{price: 70.6, platform: 'Huobi', bank: 'Райфайзен'},
	{price: 70.6, platform: 'Huobi', bank: 'Альфа'},
]


 

btnFind.addEventListener('click', () => {
	const criteriy = document.querySelectorAll('.content__conditions-item__drop-select')
	let criteriyText1 = criteriy[0].textContent
	let criteriyText2 = criteriy[1].textContent

	let elsIndex = foundOffers.filter(index => {
		return index.platform == criteriyText1 && index.bank == criteriyText2;
	});
	let elsIndexLength = elsIndex.length

	
	if(btnFind.className == 'content__btn-button main-btn onclick active') {
		findSlider.innerHTML = ''
		findMenuslide.innerHTML = ''
		findVectors.innerHTML = ''
	}

	setTimeout(() => {
		btnFind.innerHTML = `Искать заново`
		btnFind.classList.add('onclick')
		
		for(i = 1; i <= elsIndexLength; i++) {
			findSlider.innerHTML += `
				<div id="slide-${i}" class="content__find-slider__slide">
					<div class="content__find-slider__slide-container">
						<div class="content__find-slider__slide-container__text">
							<span class="rubles">${elsIndex[i-1].price}</span> рублей на <span class="platform">${elsIndex[i-1].platform}</span>, <span class="bank">${elsIndex[i-1].bank}</span>
						</div>
						<img src="img/символы/перейти.png" alt="">
					</div>
				</div>
			`
		}
		for(i = 1; i <= elsIndexLength; i++) {
			findMenuslide.innerHTML += `
				<div data-slide="#slide-${i}" class="content__find-menuslide-item"></div>
			`
		}
		findVectors.innerHTML += `
			<div class="content__find-vectors__img next" id="next"></div>
			<div class="content__find-vectors__img back" id="back"></div>
		`

	}, 600)
})