let countNumber = 0;
let countNumberLabel = document.getElementById('countNumberId')

document.getElementById("decreaseButtonId").onclick = function(){
    countNumber--;
    countNumberLabel.textContent = countNumber;
}

document.getElementById("resetButtonId").onclick = function(){
    countNumber = 0;
    countNumberLabel.textContent = countNumber;
}

document.getElementById("increaseButtonId").onclick = function(){
    countNumber++;
    countNumberLabel.textContent = countNumber;
}