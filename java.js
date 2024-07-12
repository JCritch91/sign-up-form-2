const html = document.querySelector('html')
const passwordInput = document.querySelector('#password')
const confirmPasswordInput = document.querySelector('#confirmPassword')
const sectionThree = document.querySelector('.sectionThree')
const formSection = document.querySelector('form')

const validationText = document.createElement('p')
validationText.textContent = 'Passwords do not match'
validationText.classList.add('validationText')

let myTimeout


function passwordValidation(){
    clearTimeout(myTimeout)
    if (passwordInput.value =='' || confirmPasswordInput.value ==''){
    passwordInput.style.borderColor = 'rgb(240, 240, 240)'
    confirmPasswordInput.style.borderColor = 'rgb(240, 240, 240)'
    
    }
    if (passwordInput.value !== ''){
        
        if (confirmPasswordInput.value !== passwordInput.value){
            myTimeout = setTimeout(() => (confirmPasswordInput.style.borderColor = 'red', passwordInput.style.borderColor = 'red', formSection.appendChild(validationText)),5000)
        }
        else if(passwordInput.value == confirmPasswordInput.value){
            passwordInput.style.borderColor ='green'
            confirmPasswordInput.style.borderColor ='green'
            
        }
    }
}

html.addEventListener('click', passwordValidation)

passwordInput.addEventListener('keyup', ()=>{
    if (passwordInput.value == confirmPasswordInput.value){
        passwordInput.style.borderColor ='green'
        confirmPasswordInput.style.borderColor ='green'
    }
    else{
    passwordInput.style.borderColor = 'rgb(240, 240, 240)'
    confirmPasswordInput.style.borderColor = 'rgb(240, 240, 240)'
    }
})

confirmPasswordInput.addEventListener('keyup', ()=>{
    formSection.removeChild(validationText)
    if (passwordInput.value == confirmPasswordInput.value){
        passwordInput.style.borderColor ='green'
        confirmPasswordInput.style.borderColor ='green'
    }
    else{
    passwordInput.style.borderColor = 'rgb(240, 240, 240)'
    confirmPasswordInput.style.borderColor = 'rgb(240, 240, 240)'
    }
})
