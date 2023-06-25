// ПОДПИСКА



// СОХРАНИТЬ
const passwordNew = document.querySelector('#password_new')
const formBtn = document.querySelector('.content__newpassword-form__btn')

function ctrlButton() {
	formBtn.disabled = this.value.trim().length === 0;
}
  
passwordNew.addEventListener('input', ctrlButton, false);