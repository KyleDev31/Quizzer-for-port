const questions = [
    {
        question: "What programming language uses System.out.println?",
        answers: [
            {text: "Python",correct: false},
            {text: "Java",correct: true},
            {text: "PHP",correct: false},
            {text: "JavaScript",correct: false},

        ] 
    },{
        question: "What programming language uses System.out.println?",
        answers: [
            {text: "Python",correct: false},
            {text: "Java",correct: true},
            {text: "PHP",correct: false},
            {text: "JavaScript",correct: false},

        ] 
    },
    {
        question: "What command do you use to output data to the screen?",
        answers: [
            {text: "Cin<<",correct: false},
            {text: "Cout>>",correct: false},
            {text: "Cout<<",correct: true},
            {text: "Output>>",correct: false},

        ] 
    },
    {
        question: "It is the process of finding or resolving different types of error",
        answers: [
            {text: "Building",correct: false},
            {text: "Debugging",correct: true},
            {text: "Correcting",correct: false},
            {text: "Managing",correct: false},

        ] 
    },
    {
        question: "The process of creating a detailed discription and instructions of the system",
        answers: [
            {text: "Compiling",correct: false},
            {text: "Commenting",correct: false},
            {text: "Documentation",correct: true},
            {text: "Integration",correct: false},

        ] 
    },
    {
        question: "The person who is responsible for creating and coding a system",
        answers: [
            {text: "Programmer",correct: true},
            {text: "Manager",correct: false},
            {text: "Coder",correct: false},
            {text: "Software",correct: false},

        ] 
    },
    {
        question: "A fast phase coding that finishes a project 3 weeks to 3 months",
        answers: [
            {text: "Agile Development",correct: false},
            {text: "Scrum",correct: true},
            {text: "Fast Coding",correct: false},
            {text: "Software Developing",correct: false},

        ] 
    },
    {
        question: "What programming language uses print to store the intended output ",
        answers: [
            {text: "Java",correct: false},
            {text: "C++",correct: false},
            {text: "JavaScript",correct: false},
            {text: "Python",correct: true},

        ] 
    },
    {
        question: "What programming language uses consol.log to store the intended output?",
        answers: [
            {text: "Java",correct: false},
            {text: "C++",correct: false},
            {text: "JavaScript",correct: true},
            {text: "Python",correct: false},

        ]
    },
    
];
const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const proceedButton = document.getElementById("proceed-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    
    currentQuestionIndex = 0;
    score = 0;
    proceedButton.innerHTML = "Proceed";
    proceedButton.classList.add("custom-button", "centered-button");
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    console.log(1);
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
    proceedButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    proceedButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'You scored ' + score +  ' out of ' + questions.length + '!';
    proceedButton.innerHTML = "Play Again";
    proceedButton.style.display = "block";
}

function handleproceedButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
};

proceedButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleproceedButton();
    }else{
        startQuiz();
    }

    }
);
startQuiz();