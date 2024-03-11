function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag image
  const img = document.querySelector("#profile img")

  // substitir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Gabriel Trabalon sorrindo, usando óculos de sol e camiseta azul marinho, barba e fundo azul"
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Gabriel Trabalon sorrindo, usando óculos de grau e camiseta azul marinho, barba e fundo azul"
    )
  }
}
