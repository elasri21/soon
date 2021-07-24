const form = document.getElementById('form')
const errorMobile = document.querySelector('.error-mobile')
const errorDesktop = document.querySelector('.error-desktop')
const page = document.getElementById("page")
const email = document.getElementById('email')
form.addEventListener("submit", function(e){
    if(email.value === "" && page.clientWidth >375){
        errorDesktop.style.display = "block"
        e.preventDefault()
    }else if(email.value === "" && page.clientWidth <= 375){
        errorMobile.style.display = "block"
        e.preventDefault()
    }
})

email.addEventListener("focus", function(){
    errorMobile.style.display = "none"
    errorDesktop.style.display = "none"
    
})

