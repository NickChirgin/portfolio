// const header = document.querySelectorAll('.app-content__header')
// const widgetHeader = document.querySelector("#personal")

// header[0].append(widgetHeader.cloneNode(true))
// header.style.width = '100%'
// console.log(header)

const dropdown = document.querySelector('#dropdown')
const header = document.querySelector('header')
const appNav = document.querySelectorAll('.app-navigation')
const description = document.querySelector('.description')
const snakeGame = document.querySelector('.snake-game')
const appMain = document.querySelector('.app-main')
const form = document.querySelector('form')
const infoBlock = document.querySelector('.info-block')

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
    if (description.style.display === 'flex' || description.style.display === ''){
        description.style.display = 'none'
    } else{
        description.style.display = 'flex'
    }

    if (infoBlock.style.display === ''){
        infoBlock.style.display = 'none'
    } else{
        infoBlock.style.display = ''
    }
})

1 === '1'
1 == '1'