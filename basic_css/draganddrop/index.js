const items = document.querySelectorAll(".box .item")
const lists = document.querySelectorAll(".box .list")
let currentItem = null

function dragStart(e) {
  console.log("dragStart")
  if (![...e.target.classList].includes("item")) {
    e.preventDefault()
    return
  }

  currentItem = e.target
  e.target.classList.add("drag-active")
  setTimeout(() => {
    e.target.style.display = "none"
  }, 0)
}

function dragEnd(e) {
  console.log("dragEnd")
  currentItem = null;
  e.target.classList.remove("drag-active")
  e.target.style.display = "flex"
}

function dragOver(e) {
  e.preventDefault()
}

function dragEenter(e) {
  console.log('enter')
  e.preventDefault()
  e.target.classList.add("hovered")
}

function dragLeave(e) {
  console.log('leave')
  e.preventDefault()
  e.target.classList.remove("hovered")
}

function drop(e) {
  console.log('drop')
  if (![...e.target.classList].includes("list")) {
    e.preventDefault()
    return
  }
  e.target.classList.remove("hovered")
  // why we don't need to remove from original position.
  e.target.append(currentItem)
  currentItem = null
}

items.forEach((item)=> {
  item.draggable = "true"
  item.addEventListener("dragstart", dragStart)
  item.addEventListener("dragend", dragEnd)
})

lists.forEach((list) => {
  list.addEventListener("dragover", dragOver)
  list.addEventListener("dragenter", dragEenter)
  list.addEventListener("dragleave", dragLeave)
  list.addEventListener("drop", drop)
})