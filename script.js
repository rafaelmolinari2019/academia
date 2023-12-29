// Código JavaScript para adicionar imagens à galeria
const galeria = document.querySelector('#galeria');

const imagens = [
    //'caminho-da-imagem-2.jpg',
    //'caminho-da-imagem-2.jpg',
    //'caminho-da-imagem-3.jpg'
];

imagens.forEach(imagem => {
    const imgElement = document.createElement('img');
    imgElement.src = imagem;
    galeria.appendChild(imgElement);
});
