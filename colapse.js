document.addEventListener("DOMContentLoaded", function () {
  const colapses = document.querySelectorAll(".colapse")

  colapses.forEach((colapse) => {
    colapse.addEventListener("click", () => {
      colapses.forEach((otherColapse) => {
        if (otherColapse !== colapse) {
          otherColapse.classList.remove("open")
        }
      })

      colapse.classList.toggle("open")
    })
  })
})
