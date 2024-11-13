const contextMenu = document.querySelector("#context-menu")

window.addEventListener("contextmenu", function(event) {
  event.preventDefault()
  const x = event.offsetX + "px"
  const y = event.offsetY + "px"
  const menu = contextMenu.querySelector(".menu")
  menu.style.top = y
  menu.style.left = x
  contextMenu.classList.add("active")
})

contextMenu.addEventListener("click", function(event) {
  contextMenu.classList.remove("active")
})