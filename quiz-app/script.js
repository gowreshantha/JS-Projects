const quizData = [
    {
        question: "Which type of JavaScript language is ___",
        a:"Object-Oriented",
        b:"Object-Based",
        c:"Assembly-language",
        d:"High-level",
        correct:"a"
    },
    {
        question: "Which one of the following also known as Conditional Expression:",
        a:"Alternative to if-else",
        b:"Switch statement",
        c:"If-then-else statement",
        d:"immediate if",
        correct:"d"
    },
    {
        question: "In JavaScript, what is a block of statement?",
        a:"Conditional block",
        b:"block that combines a number of statements into a single compound statement",
        c:"both conditional block and a single statement",
        d:"block that contains a single statement",
        correct:"b"
    },
    {
        question: "The \"function\" and \" var\" are known as:",
        a:"Keywords",
        b:"Data types",
        c:"Declaration statements",
        d:"Prototypes",
        correct:"c"
    },
    {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        a:"Global variable",
        b:"The local element",
        c:"The two of the above",
        d:"None of the above",
        correct:"b"
    }
];

let currentQuestion = 0;

const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const option_a = document.getElementById("option_a");
const option_b = document.getElementById("option_b");
const option_c = document.getElementById("option_c");
const option_d = document.getElementById("option_d");
const submitBtn = document.getElementById("submitBtn");
const answers = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz(){
        deSelectAnswers();
        question.innerText = quizData[currentQuiz].question;
        option_a.innerText = quizData[currentQuiz].a;
        option_b.innerText = quizData[currentQuiz].b;
        option_c.innerText = quizData[currentQuiz].c;
        option_d.innerText = quizData[currentQuiz].d;
}

submitBtn.addEventListener('click', function(){
   //Check to see the answer
    let answer = getSelected();

    //If answer is selected continue or do nothing
    if(answer)
    {
        //If answer is correct increment the score
        if(answer === quizData[currentQuiz].correct)
        {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length)
        {
            loadQuiz();
        }else{
        quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions. </h2>
                            <button onclick='location.reload()'>Reload</button>`;
        } 
    }
});

//To get selected answer
function getSelected(){
    let answerSelected = undefined;
    answers.forEach((answer)=>{
        if(answer.checked){
            answerSelected = answer.id;
        }
    });
    return answerSelected;
}

//To de-select answers
function deSelectAnswers(){
    answers.forEach((answer)=>{
        answer.checked = false;
    });
}
