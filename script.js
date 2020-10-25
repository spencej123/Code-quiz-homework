let beginButton = document.getElementById("begin-button");
let questionHolderElement = document.getElementById("question-holder");

beginButton.addEventListener("click", begin);

function begin() {
    beginButton.classList.add("conceal");
    questionHolderElement.classList.remove("conceal");    
}

function setContinue() {

}

function chooseAnswer() {

}