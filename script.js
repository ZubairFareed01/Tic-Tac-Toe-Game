const boxes = document.querySelectorAll(".box");
const wins = document.querySelector("#wins");
const resetbtn = document.querySelector("#reset");


let turno = true;

let winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "o";
            turno = false;
            box.style.color = "green";


        } else {
            box.innerText = "x";
            turno = true;
            box.style.color = "black";
        }
        box.disabled = true;
        checkwinner();
    })

});



const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos0val = boxes[pattern[0]].innerText;
        let pos1val = boxes[pattern[1]].innerText;
        let pos2val = boxes[pattern[2]].innerText;


        if (pos1val != "" && pos0val != "" && pos2val != "") {
            if (pos0val === pos1val && pos1val === pos2val) {
                wins.style.display = "block"
                wins.innerText = `winner is ${pos0val}`
                for (let box of boxes) {
                    box.disabled = true;
                }
            }


        }
    }

}

const resetgame = () => {

    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    turno = true;
    wins.style.display = "none"
}

resetbtn.addEventListener("click", resetgame);