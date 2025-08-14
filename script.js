let input = document.querySelector('.email')
let button = document.querySelector('.go-btn')
let icon = document.querySelector('.icon')
let error = document.querySelector('.err-msg')

button.addEventListener('click', ()=> {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(input.value)){
        input.style.borderColor = 'red'
        icon.style.display = 'block'
        error.style.display = 'block'
    }
    else{
         input.style.borderColor = '#F2A1A0'
        icon.style.display = 'none'
        error.style.display = 'none'
        input.value = ''
    }
})