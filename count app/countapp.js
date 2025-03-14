let countNumberLabel = document.getElementById('countNumberId')
let countNumber = 0;

document.getElementById('increaseButtonId').onclick = function(){
    countNumber+=1;
    countNumberLabel.textContent = countNumber
}
document.getElementById('resetButtonId').onclick = function(){
    countNumber = 0;
    countNumberLabel.textContent = countNumber;
}
document.getElementById('decreaseButtonId').onclick = function(){
    countNumber -=1;
    countNumberLabel.textContent = countNumber;
}