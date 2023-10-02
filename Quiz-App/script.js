const quizData=[
    {
        question:"What does HTML stands for?",
        a:'Hyperlinks and Text Markup Language',
        b:'Hyper Text Markup Language',
        c:'Hyper Tool Markup Language',
        d:'Hyper Text Mark Language',
        correct:'b',
    },
    {
        question:"How can you open a link in a new browser window ?",
        a:'Target',
        b:'_blank',
        c:'Same',
        d:'Open',
        correct:'b',
    },
    {
        question:"what is DOM ?",
        a:'Document Object Model',
        b:'Developer Object Model',
        c:'Document of Model',
        d:'Download object Model',
        correct:'a',
    },
    {
        question:"Which tag is used to write Js Code in HTML code ?",
        a:'<link>',
        b:'<source>',
        c:'<script>',
        d:'<a>',
        correct:'c',
    },
    {
        question:"What is CSS ?",
        a:'Cascading Style Sheets',
        b:'Classical Style Sheets',
        c:'Colorful Styling Sheets',
        d:'Commom style Sheets',
        correct:'a',
    } 
];
const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const currentQuizData =quizData[currentQuiz]  
    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d 
}


function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked=false)
}

function getSelected(){
         let answer
        answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer=answerEl.id
        }
     })
     return answer     
}
  


submitBtn.addEventListener('click',()=>{
    const answer=getSelected()
    if(answer){
        if(answer=== quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML= ` 
            <h2> you answered ${score}/${quizData.length} questions correctly </h2>
            <button onclick="location.reload()" > Reload </button>
            `
        } 
    }
})
 