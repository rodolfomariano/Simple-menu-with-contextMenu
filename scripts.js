const content = document.querySelectorAll('.content')
const itemTitle = document.getElementById('item-title')

const editItem = document.querySelector('#edit')
const deleteItem = document.querySelector('#delete')

let itemId = ''
let activeMenu = {}

for (let i = 0; i < content.length; i++) {

  content[i].onclick = () => {
    let menuItem = 0
    while (menuItem < content.length) {
      content[menuItem++].classList.remove('active')
    }
    content[i].classList.add('active')
  }
}

content.forEach(menu => {

  menu.addEventListener('contextmenu', event => {
    itemId = menu.id
    event.preventDefault()

    itemTitle.innerText = itemId

    const contextElement = document.getElementById('context-menu')
    contextElement.style.top = event.clientY + 'px'
    contextElement.style.left = event.clientX + 'px'
    contextElement.classList.add('active')


  })
})


window.addEventListener('click', () => {
  document.getElementById('context-menu').classList.remove('active')
})


editItem.addEventListener('click', () => {
  alert(`Editar o ${itemId}?`)
})

deleteItem.addEventListener('click', () => {
  alert(`Deletar o ${itemId}?`)
})