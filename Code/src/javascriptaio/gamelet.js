// stick with lower camel case for name variables
// underscores are used for external sources such as data files

const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);

let positionX = 0;
let positionY = 0;

function handleKeyPress(action) {
    if (action.key === "ArrowRight"){
        positionX = positionX + 10;
        console.log(positionX)
    }
    if (action.key === "ArrowLeft"){
        positionX = positionX - 10;
        console.log(positionX)
    }
    if (action.key === "ArrowUp"){
        positionY = positionY - 10;
        console.log(positionY)
    }
    if (action.key === "ArrowDown"){
        positionY = positionY + 10;
        console.log(positionY)
    }
    refresh();
}

function refresh(){
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';
}
