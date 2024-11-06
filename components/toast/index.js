function createNotification({type, title, description}) {
  const iconMap = {
    "success": "fa-check",
    "error": "fa-exclamation",
    "warning": "fa-exclamation-triangle",
    "info": "fa-info",
  }

  const notificationContainer = document.querySelector("#notification-container")
  const notificationEl = document.createElement("div")
  notificationEl.innerHTML = `
    <button class="close-btn">&times;</button>
    <div class="icon">
      <i class="fa ${iconMap[type]}"></i>
    </div>
    <div class="seperator"></div>
    <div class="message">
      <h2></h2>
      <p></p>
    </div>
  `

  notificationEl.classList.add("notification", type)
  notificationEl.querySelector(".message h2").innerText = title
  notificationEl.querySelector(".message p").innerText = description
  notificationEl.querySelector(".close-btn").addEventListener("click",
    function() {
      notificationEl.classList.add("dismiss")
      setTimeout(() => {
        notificationEl.remove()
      }, 300)
    }
  )

  notificationContainer.append(notificationEl)
}

document
.querySelector("#success-notification-btn")
.addEventListener("click", function() {
  createNotification({
    type: "success",
    title: "This is a success notification",
    description: "Elit incididunt pariatur id do culpa esse ullamco esse pariatur."
  })
})

document
.querySelector("#error-notification-btn")
.addEventListener("click", function() {
  createNotification({
    type: "error",
    title: "This is a error notification",
    description: "Elit incididunt pariatur id do culpa esse ullamco esse pariatur."
  })
})

document
.querySelector("#warning-notification-btn")
.addEventListener("click", function() {
  createNotification({
    type: "warning",
    title: "This is a warning notification",
    description: "Elit incididunt pariatur id do culpa esse ullamco esse pariatur."
  })
})

document
.querySelector("#info-notification-btn")
.addEventListener("click", function() {
  createNotification({
    type: "info",
    title: "This is a info notification",
    description: "Elit incididunt pariatur id do culpa esse ullamco esse pariatur."
  })
})