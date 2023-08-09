const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() =>{

    const pipeposition = pipe.offsetLeft;
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipeposition <= 120 && pipeposition > 0 && marioposition < 100) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipeposition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioposition}px`;

        mario.src = 'Imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

    }

}, 10)

document.addEventListener('keydown', jump);