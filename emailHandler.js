const myForm = document.getElementById("forma");
const btn = document.querySelector('#btnSubmit')
const dateNow = document.querySelector('.dateNow')
const thanksBlock = document.querySelector(".thanks")
const sendAnotherMessage = document.querySelector('#send-message')
const nameSpan = document.querySelector('#name')
const nameInput = document.querySelector('#fname')
const emailInput = document.querySelector('#email1')
const messageInput = document.querySelector('#message1')
const emailSpan = document.querySelector('#emailText')
const messageSpan = document.querySelector('#messageText')
const dropdown = document.querySelector('#dropdown')
const header = document.querySelector('header')
const appNav = document.querySelectorAll('.app-navigation')
const description = document.querySelector('.description')
const snakeGame = document.querySelector('.snake-game')
const appMain = document.querySelector('.app-main')
const form = document.querySelector('form')

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

dateNow.innerHTML = `"${today}"`

btn.addEventListener('onclick', () =>{
    document.myForm.submit();
})
myForm.addEventListener('submit', e =>{
    e.preventDefault();
    console.log(123)
    const formData = new FormData(myForm);
    let formDataObject = Object.fromEntries(formData.entries());
    let formDataJson = JSON.stringify(formDataObject)
    fetch('http://127.0.0.1:8000/api/forma', {
        method: 'post',
        headers: {
            "Accept": "application/json",
            "Content-Type":  "application/json",
        },
        body: formDataJson
    }).then(function (response) {
        return response.text();
    }).then(function (text){
        console.log(text)
    })
    myForm.style.zIndex = -1
    thanksBlock.style.zIndex = 1;
})

sendAnotherMessage.addEventListener('click', e =>{
    e.preventDefault();
    myForm.style.zIndex = 1;
    thanksBlock.style.zIndex = -1;
})

nameInput.addEventListener('change', e=>{
    nameSpan.innerHTML = `"${document.getElementById('fname').value}"`
})

emailInput.addEventListener('change', e=>{
    emailSpan.innerHTML = `"${document.getElementById('email1').value}"`
})

messageInput.addEventListener('change', e=>{
    messageSpan.innerHTML = `"${document.getElementById('message1').value}"`
})

dropdown.addEventListener('pointerdown', e =>{
    if (header.classList.contains('dropdown')){
        header.classList.remove('dropdown')
    } else{
        header.classList.add('dropdown')
    }
    if (appNav[0].style.display === 'none' || appNav[0].style.display === ''){
        appNav[0].style.display = 'flex'
        appNav[1].style.display = 'flex'
        appNav[2].style.display = 'flex'
        appNav[3].style.display = 'flex'
    } else{
        appNav[0].style.display = 'none'
        appNav[1].style.display = 'none'
        appNav[2].style.display = 'none'
        appNav[3].style.display = 'none'
    }
    if (form.style.display == '' ){
        form.style.display = 'none'
    } else{
        form.style.display = ''
    }
})