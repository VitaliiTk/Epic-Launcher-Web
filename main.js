const searchInput = document.querySelector('.search')
const searchClearIcon = document.querySelector('#clear')
const topMenuBtn = document.querySelectorAll('.right-side__top-menu-item a')
const menuItem = document.querySelectorAll('.right-side__top-menu-item')
const desctopIcon = document.querySelector('.desctop-icon')
const appWindow = document.querySelector('.wrapper')
const windowCloseIcon = document.querySelector('#close')
const leftMenuLinks = document.querySelectorAll('.left-menu__list-link')
const rightContent = document.querySelector('.right-side__wrapper')
const downloadLink = document.querySelector('#downloads')
const downloadTopBar = document.querySelector('.download-menu__top-bar')
const downloadWrapper = document.querySelector('.download-wrapper')
const downloadMenu = document.querySelector('.download-menu')
const acount = document.querySelector('#acount')
const acountSettings = document.querySelector('.acount-setings')
const settingsLink = document.querySelector('#settings')
const settingsContent = document.querySelector('.settings-content')
const settingsTopBar = document.querySelector('.settings-content__top-bar')


// if input have text inside, clear icon is visible and backwards
searchInput.addEventListener('input', (event) => {
    if (event.currentTarget.value != '') searchClearIcon.classList.remove('display-none')
    else if (event.currentTarget.value == '') searchClearIcon.classList.add('display-none')
})

// searh clear icon press
searchClearIcon.addEventListener('click', (event) => {
    searchInput.value = ''
    event.currentTarget.classList.add('display-none')
})

// top menu switch
topMenuBtn.forEach((element, index) => {
    element.addEventListener('click', () => {
        menuItem.forEach(item => item.classList.remove('selected'))
        menuItem[index].classList.add('selected')
    })
})

// desctop logic, open app, close app
desctopIcon.addEventListener('mousedown', (event) => {
    event.currentTarget.classList.add('selected')
    event.stopPropagation()
})

desctopIcon.addEventListener('click', (event) => {
    event.stopPropagation()
})
desctopIcon.addEventListener('contextmenu', (event) => {
    event.stopPropagation()
})

desctopIcon.addEventListener('dblclick', (event) => {
    event.stopPropagation()
    appWindow.classList.add('vis-hidden')
    appWindow.classList.remove('display-none')
    document.body.classList.add('progress')
    setTimeout(() => {
        appWindow.classList.remove('vis-hidden')
        document.body.classList.remove('progress')
    }, 600);
})

document.body.addEventListener('click', (event) => {
    desctopIcon.classList.remove('selected')
    console.log('body left click');
})

document.body.addEventListener('contextmenu', (event) => {
    desctopIcon.classList.remove('selected')
    console.log('body right click');
    // document.body.oncontextmenu = 'true'
})

windowCloseIcon.addEventListener('click', (event) => {
    event.stopPropagation()
    appWindow.classList.add('display-none')
})

appWindow.addEventListener('click', event => {
    event.stopPropagation()
    if (acountSettings.classList.contains('active')) {
        acountSettings.classList.toggle('active')
        console.log('wrapper click');
    }
})
appWindow.addEventListener('contextmenu', event => event.stopPropagation())

leftMenuLinks.forEach(element => {
    element.addEventListener('click', event => {
        leftMenuLinks.forEach(element => { element.classList.remove('selected') })
        event.currentTarget.classList.add('selected')
    })
})

function downloadsWindowClose(event) {
    document.querySelector('.right-side').classList.toggle('download-active')
    event.stopPropagation()
}

downloadLink.addEventListener('click', downloadsWindowClose)
downloadTopBar.addEventListener('click', downloadsWindowClose)
downloadWrapper.addEventListener('click', downloadsWindowClose)
downloadMenu.addEventListener('click', event => event.stopPropagation())

acount.addEventListener('click', event => {
    event.stopPropagation()
    acountSettings.classList.toggle('active')
    console.log('click');
})

acountSettings.addEventListener('click', event => event.stopPropagation())

settingsLink.addEventListener('click', event => {
    event.stopPropagation()
    settingsContent.classList.toggle('active')
})

settingsTopBar.addEventListener('click', event => {
    event.stopPropagation()
    settingsContent.classList.toggle('active')
})