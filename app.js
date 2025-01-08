const Boxes = document.querySelectorAll(".box");
const reset = document.querySelector(".reset");

let turnO = true;




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
    })
})