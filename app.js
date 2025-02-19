const Boxes = document.querySelectorAll(".box");
const reset = document.querySelector(".reset");
const msgContainer = document.getElementById('msg-container');


// console.log(Boxes)
// console.log(typeof reset)

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [1, 4, 7],
    [6, 7, 8]
];


const showWinner = (winner) => {
    msgContainer.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    msgContainer.classList.add("msg-height");
    disabled();

}
const showDraw = () =>{
    msgContainer.innerText = `The game is Draw`;
    msgContainer.classList.remove("hide");
    msgContainer.classList.add("msg-height");
}

const resetGame = () => {
    enabled();
    for(let box of Boxes){
        box.innerText = "";
    }
    turnO = true;
    msgContainer.classList.add('hide');

}
const enabled = () => {
    for(let btn of Boxes){
        btn.disabled = false;
    }
}

const disabled = () => {
    for(let btn of Boxes){
        btn.disabled = true;
    }
}





Boxes.forEach((box) =>{
    box.addEventListener('click', ()=>{
        if(turnO){
            box.innerText = "X",
            turnO = false;
        }
        else{
            box.innerText = "O",
            turnO = true;
        }
        box.disabled = true;
        

        checkWinner();
    });

});

const checkWinner = () => {
    for(let patterns of winPatterns){
        
        const pos1Val =    Boxes[patterns[0]].innerText;
        const pos2Val =    Boxes[patterns[1]].innerText;
        const pos3Val =    Boxes[patterns[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
            
        }

    }
}

document.getElementById("reset").addEventListener('click', resetGame)
document.getElementById("new-game").addEventListener('click', resetGame)