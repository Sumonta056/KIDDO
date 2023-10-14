const questions = [
    {
        question: "How many hours did you spend today with your children?",
        answers: [
            {text: "Less then 2 hours", correct: false},
            {text: "2 hours", correct: false},
            {text: "Less then 5 hours", correct: false},
            {text: "More then 5 hours", correct: true},
        ]
    },
    {
        question: "How many times you scold your child today?",
        answers: [
            {text: "Not at all", correct: true},
            {text: "When it gets worse, only then I scold", correct: true},
            {text: "A few times in a day", correct: false},
            {text: "Without scolding, it is unmanagable", correct: false},
        ]
    },
    {
        question: "How much time did your child took rest today?",
        answers: [
            {text: "6 hours", correct: false},
            {text: "7 hours", correct: false},
            {text: "8 hours", correct: true},
            {text: "More than 8 hours", correct: true},
        ]
    },
    {
        question: "Have you played with your child today?",
        answers: [
            {text: "Not at all", correct: false},
            {text: "For a few mmoments", correct: false},
            {text: "We spent time together but didn't play", correct: false},
            {text: "We played a lot", correct: true},
        ]
    },
    {
        question: "Have you given proper food to your child?",
        answers: [
            {text: "I don't know", correct: false},
            {text: "He ate homemade food only", correct: false},
            {text: "He overate", correct: false},
            {text: "We tried to maintain proper food chart", correct: true},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuize(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.desplay = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.corrrect === "true"){
            button.classList.add("correct"); 
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    if(score < questions.length - 3){
        questionElement.innerHTML = `You should be more attentive to your child`;
    }
    else if(score < questions.length - 2){
        questionElement.innerHTML = `You are trying to be a good parent, please try to hold this phase`;
    }
    else{
        questionElement.innerHTML = `You and your child have really great bonding. Kudos to both of you`;
    }
    
    
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuize();
    }
})

startQuize();
