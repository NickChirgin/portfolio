const dropdown = document.querySelector('#dropdown')
const header = document.querySelector('header')
const appNav = document.querySelectorAll('.app-navigation')
const description = document.querySelector('.description')
const snakeGame = document.querySelector('.snake-game')
const appMain = document.querySelector('.app-main')
const form = document.querySelector('form')
const appContent = document.querySelector('.app-content')
const infoBlock = document.querySelector('.info-block')
const infoBlockHeader = document.querySelector('.info-block--header')
const interests = document.querySelector('#interests')
const edu = document.querySelector('#education')
const bio = document.querySelector('#bio')

dropdown.addEventListener('pointerdown', e =>{
    if (header.classList.contains('dropdown')){
        header.classList.remove('dropdown')
    } else{
        header.classList.add('dropdown')
    }
    if (appNav[0].style.display === "" || appNav[0].style.display === "none"){
        appNav[0].style.display = 'flex'
        appNav[1].style.display = 'flex'
        appNav[2].style.display = 'flex'
        appNav[3].style.display = 'flex'
    } else{
        appNav[0].style.display = 'none'
        appNav[1].style.display = 'none'
        // appNav[2].style.display = 'none'
        // appNav[3].style.display = 'none'
    }
    if (appContent.style.display === ''){
        appContent.style.display = 'none'
    } else {
        appContent.style.display = ''
    }
})

interests.addEventListener('click', () =>{
    interests.classList.add('category-chosen')
    bio.classList.remove('category-chosen')
    edu.classList.remove('category-chosen')
})

bio.addEventListener('click', () =>{
    bio.classList.add('category-chosen')
    interests.classList.remove('category-chosen')
    edu.classList.remove('category-chosen')
})

edu.addEventListener('click', () =>{
    edu.classList.add('category-chosen')
    bio.classList.remove('category-chosen')
    interests.classList.remove('category-chosen')
})