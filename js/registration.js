const btnReg = document.querySelectorAll('#registration')



let popUpReg = document.createElement('div')
popUpReg.className = 'popUp_registr'
popUpReg.innerHTML = `
	<div class="registr">
		<div class="registr-lock">+</div>
		<div class="registr-header">
			<button class="registr-header__entry active">Вход</button>
			<button class="registr-header__registration">Регистрация</button>
		</div>
		<form action="send.php" method="POST" class="registr-content">
			<input type="login" name="login" class="registr-content__login" placeholder="Login"></input>
			<input type="password" name="pass" class="registr-content__password" placeholder="Password" type="password"></input>
			<div type="submit" class="registr-content__btn"><div class="main-btn">Войти</div></div>
			<a class="registr-content__forgot">Забыли пароль?</a>
		</form>
		<div class="registr-line"></div>
		<div class="registr-footer">
			<div class="registr-footer__text">Войти с помощью</div>
			<div class="registr-footer__list">
				<a href="#" class="registr-footer__list-img"><img src="img/значки/image 3.png"></a>
				<a href="#" class="registr-footer__list-img"><img src="img/значки/image 2.png"></a>
				<a href="#" class="registr-footer__list-img"><img src="img/значки/github_png.png"></a>
			</div>	
		</div>
	</div>
`
let mainBtn = popUpReg.querySelector('.registr-content__btn .main-btn')
let forgotPass = popUpReg.querySelector('.registr-content__forgot')
console.log(mainBtn);


btnReg.forEach(el => {
	el.addEventListener('click', () => {
		document.body.classList.add('lockk')
		document.body.prepend(popUpReg)
		price()
	})
})
popUpReg.addEventListener('click', (e) => {
	if(e.target.className == 'popUp_registr') {
		document.body.classList.remove('lockk')
		document.body.removeChild(popUpReg)
	}
})
popUpReg.addEventListener('click', (e) => {
	if(e.target.className == 'registr-lock') {
		document.body.classList.remove('lockk')
		document.body.removeChild(popUpReg)
	}
})


let btnsNode = popUpReg.querySelectorAll('.registr-header button')

btnsNode.forEach(el => {
	el.addEventListener('click', () => {
		btnsNode.forEach(el => {
			el.classList.remove('active')
		})
		el.classList.add('active')
		entry_reg()
	})
})


function entry_reg() {
	let entryBtn = document.querySelector('.registr-header__entry')
	let registrBtn = document.querySelector('.registr-header__registration')

	if(entryBtn.classList == 'registr-header__entry active') {
		mainBtn.innerHTML = 'Войти'
		forgotPass.textContent = 'Забыли пароль?'
	}
	if(registrBtn.classList == 'registr-header__registration active') {
		mainBtn.textContent = 'Регестрация'
		forgotPass.textContent = ''
	}
}