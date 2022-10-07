const menuBar = document.getElementById("menu-bar")
const clearMenu = document.getElementById('clear-menu')
const menu = document.querySelector('.menu')
const menuOpen = document.getElementById('.menu-ativo')

const lista = document.querySelectorAll("li")

const abre = () => {
    if(!menuOpen){

        menuBar.classList.remove('menubarAtivo')
        menuBar.classList.add('desativado')
        menu.classList.remove('desativado')
        menu.classList.add('menu-ativo')
        
        clearMenu.style.display = "flex"

    }
}

const fechar = () => {
    menuBar.classList.add('menubarAtivo')
    menuBar.classList.remove('desativado')
    menu.classList.add('desativado')
    menu.classList.remove('menu-ativo')
    
    clearMenu.style.display = "none"
}


menuBar.addEventListener("click", abre)
clearMenu.addEventListener('click', fechar)

lista.forEach((item) => item.addEventListener('click', function(){

        menu.classList.add('desativado')
        menu.classList.remove('menu-ativo')
        menuBar.classList.add('menubarAtivo')
        menuBar.classList.remove('desativado')
    
        clearMenu.style.display = "none"

}))