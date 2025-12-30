function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
    const imagem = document.querySelector('#profile img')
    //substituir a imagem
    if(html.classList.contains('light')) {
            // se tiver light mnode, adicionar a imagem light
        imagem.setAttribute('src', 'avatar-light.png')
    } else {
        // se sem light mode, substituir a imagem
        imagem.setAttribute('src', 'avatar.png')
    }
}