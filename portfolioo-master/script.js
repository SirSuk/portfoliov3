


const btn= document.getElementById("btnColores");
const domH1 = document.querySelector('.titulo_movimiento');
const text = "Hi, I'm Radif"
const hamburguer = document.querySelector('#burguer');
const cambioModo = document.querySelector('.cambiomodo');
const cambioModoGame = document.querySelector('.cambioModoGame')


const botonVibrante = () => {
    console.log(btn)
    btn.classList.add("vibracion");
}





cambioModo.addEventListener('mouseover', () => {
    cambioModo.src = "./assets/todoapp-modonoche.jpg"
})

cambioModo.addEventListener('mouseleave', () => {
    cambioModo.src = "./assets/todoapp-mododia.jpg"
})


cambioModoGame.addEventListener('mouseover', () => {
    cambioModoGame.src = "./assets/animalmemory2.jpg"
})

cambioModoGame.addEventListener('mouseleave', () => {
    cambioModoGame.src = "./assets/animalmemorygame.jpg"
})

/* handle hamburguer */




/*background changer */

btn.addEventListener('click', () => {
    document.body.style.background = colorChange()
})
function colorChange () {
    return `hsl(${Math.floor(Math.random()*360)}, 20% ,70%)`
}


/* auto text writer */
let index = 0;
function writeText() {
    domH1.innerHTML = text.slice(0, index);
    index++;
}
setInterval(writeText, 500)


window.onload = botonVibrante();