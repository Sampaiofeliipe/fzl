
const botaoMenu = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu')

botaoMenu.addEventListener('click', function(event)
{
   event.preventDefault()
    menu.classList.toggle('active')
})

