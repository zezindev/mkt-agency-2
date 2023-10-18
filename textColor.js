document.addEventListener("DOMContentLoaded", function () {
  const backgroundImage = document.getElementById("background-image")
  const textContainer = document.getElementById("text-container")

  // Verificar se a imagem azul está visível
  const isImageVisible = isElementInViewport(backgroundImage)

  // Aplicar a cor de texto apropriada
  if (isImageVisible) {
    textContainer.style.color = "#fefefe" // Alterado para #fefefe
  }
})

// Função para verificar se um elemento está visível na viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
