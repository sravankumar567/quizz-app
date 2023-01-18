const Quizdb=[
           {
            question:"what is my name",
            el1:"sravan",
            el2:"kumar",
            el3:"rythl",
            el4:"hello",
            ans:"ans1"

 },
 {
    question:"what is india captial ",
    el1:"pune",
    el2:"Munbai",
    el3:"Delhi",
    el4:"Banglore",
    ans:"ans3"
},
 {
    question:"what is india's currency",
    el1:"Dollar",
    el2:"rupee",
    el3:"Dinar",
    el4:"others",
    ans:"ans2"
 },
 {
    question:"what are indian languages",
    el1:"Hindi",
    el2:"Telugu",
    el3:"Tamil",
    el4:"All the above",
    ans:"ans4"
 }


     ]
const Question=document.querySelector("#question");
const option1=document.getElementById("A")
const option2=document.getElementById("B")
const option3=document.getElementById("C")
const option4=document.getElementById("D");
const submit=document.querySelector("#btn");
const answers=document.querySelectorAll('.answer')
const TotalScore=document.querySelector(".Showscore");
let questionCount=0;
let score=0;



const loadQuestion= ()=>{
    
    let Quizobject=Quizdb[questionCount]
    Question.innerText=Quizobject.question;
    option1.innerText=Quizobject.el1;
    option2.innerText=Quizobject.el2;
    option3.innerText=Quizobject.el3;
    option4.innerText=Quizobject.el4;
}
loadQuestion();
const getelementcheck=()=>{
    let answer;
    answers.forEach((chkelment) => {
        if(chkelment.checked){
            answer=chkelment.id;

        }
        
       
        
    });
    return answer;
}
let deselectAll=()=>{
    answers.forEach(chkelment => chkelment.checked=false);
}
submit.addEventListener('click', ()=>{
    const checkAnswer=getelementcheck();
    console.log(checkAnswer);
    if(checkAnswer === Quizdb[questionCount].ans){
        score++;
    }
    questionCount++;
    deselectAll();


    if(questionCount<Quizdb.length){
        loadQuestion();

    }else{
        TotalScore.innerHTML=`<h3> your total score is${score}/${Quizdb.length} </h3>
        <button onclick="location.reload()"> play again</button> 
        `
        TotalScore.classList.remove('.Showscore');

    }





});






