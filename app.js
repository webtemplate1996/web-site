window.onload = function(){
    document.getElementById('box').classList.add('visible')
} 

// Las palabras que quieres alternar
const words = ["Landing Page", "Website","Web Responsive"];
let index = 0;

// Selecciona el span donde se cambiarán las palabras
const wordElement = document.querySelector('.word');

// Función para cambiar palabras
function changeWord() {
    wordElement.classList.remove('active'); // Hace invisible la palabra actual

    setTimeout(() => {
        index = (index + 1) % words.length; // Avanza al siguiente índice de palabra
        wordElement.textContent = words[index]; // Cambia el texto de la palabra
        wordElement.classList.add('active'); // Hace visible la nueva palabra
    }, 1000); // Tiempo en milisegundos para la transición (1 segundo)
}

// Cambia la palabra cada 3 segundos
setInterval(changeWord, 5000);


document.getElementById('year').textContent = new Date().getFullYear();


const icon_ham = document.querySelector('.icon-ham')
const closed = document.querySelector('.close')
const nav = document.querySelector('.nav-bar')
 

icon_ham.addEventListener('click', () =>{
    nav.classList.add('visible')
    // document.body.classList.add('no-scroll')
})

closed.addEventListener('click', () => {
    nav.classList.remove('visible')
    // document.body.classList.remove('no-scroll')
})