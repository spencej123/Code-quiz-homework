let startMinutes = 5;
let time = startMinutes * 60;
let
countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    time = time < 0 ? 0 : time; 
}
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        
        let element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

       
        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            let element = document.getElementById("answer" + i);
            element.innerHTML = choices[i];
            guess("button" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    let gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    let element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};



let questions = [
    new Question("When were the rings of power created?", ["The Years of the Lamps", "The Years of the Trees","The First Age", "The Second Age"], "The Second Age"),
    new Question("Which language do the High Elves Speak?", ["Quenya", "Sindarin", "Common Tongue", "The Black Speech of Mordor"], "Quenya"),
    new Question("Which group of men were given the land of Numenor?", ["The Men of Rohan", "The Easterlings","The Edain", "The Haradrim"], "The Edain"),
    new Question("Which race of Middle-Earth are immortal?", ["Hobbits", "Elves", "Men", "Dwarfs"], "Elves"),
    new Question("After the ending of the Second Age, what is the name of the only way to reach Valenor?", ["The Pass of Caradhras", "The Winding Stair", "The Straight Road", "The Barrow-Downs"], "The Straight Road")
];


let quiz = new Quiz(questions);


populate();


  
  



