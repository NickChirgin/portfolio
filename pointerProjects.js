const dropdown = document.querySelector('#dropdown')
const header = document.querySelector('header')
const appNav = document.querySelectorAll('.app-navigation')
const description = document.querySelector('.description')
const snakeGame = document.querySelector('.snake-game')
const appMain = document.querySelector('.app-main')
const form = document.querySelector('form')
const infoBlock = document.querySelector('.info-block')
const infoBlockHeader = document.querySelector('.info-block--header')

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
        appNav[2].style.display = 'none'
        appNav[3].style.display = 'none'
    }
    if (infoBlock.style.display === ''){
        infoBlock.style.display = 'none'
    } else{
        infoBlock.style.display = ''
    }
    if (infoBlockHeader.style.display === ''){
        infoBlockHeader.style.display = 'none'
    } else{
        infoBlockHeader.style.display = ''
    }
})