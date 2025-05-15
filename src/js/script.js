//DECLARANDO O ARRAY DE IMAGENS

let imagens =[
    'src/assets/imagem0.jpg',
    'src/assets/imagem1.jpg',
    'src/assets/imagem2.jpg',
    'src/assets/imagem3.jpg',
];

//DECLARANDO AS VARIAVEIS

let i=0;
let tempo =3000;

//CRIANDO A FUNLÇAO SLIDESHOW

function slideShow(){
    document.getElementById("hero").style.backgroundImage = `var(--gradient), url(${imagens[i]})`; // Corrigido: Adicionado `url()`

    i++;
    if( i == imagens.length){
        i=0;
    }
    setTimeout("slideShow()",tempo)
}
slideShow();
