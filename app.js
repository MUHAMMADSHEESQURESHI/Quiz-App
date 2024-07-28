let quizobj = [
    {
      question: "What is the capital of France?",
      options: [
        "Paris",
        "London",
        "Berlin",
        "Madrid"
      ],
      correctAnswer: "Paris"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: [
        "Harper Lee",
        "Mark Twain",
        "Ernest Hemingway",
        "F. Scott Fitzgerald"
      ],
      correctAnswer: "Harper Lee"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: [
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn"
      ],
      correctAnswer: "Jupiter"
    },
    {
      question: "What is the smallest country in the world by area?",
      options: [
        "Monaco",
        "Vatican City",
        "San Marino",
        "Liechtenstein"
      ],
      correctAnswer: "Vatican City"
    },
    {
      question: "In what year did the Titanic sink?",
      options: [
        "1912",
        "1905",
        "1915",
        "1920"
      ],
      correctAnswer: "1912"
    }
  ];
    let count = 0
    let h1el = document.querySelectorAll("#question")[0]
    let optA = document.querySelectorAll("#option-1")[0]
    let optB = document.querySelectorAll("#option-2")[0]
    let optC = document.querySelectorAll("#option-3")[0]
    let optD = document.querySelectorAll("#option-4")[0]
    let btnEl = document.querySelectorAll("button")[0]
    

    loadQuiz()
function loadQuiz (){

    h1el.innerHTML ="Q"+ (count + 1) + "). " +quizobj[count].question
    optA.innerHTML = quizobj[count].options[0]
    optB.innerHTML = quizobj[count].options[1]
    optC.innerHTML = quizobj[count].options[2]
    optD.innerHTML = quizobj[count].options[3]

    


}

function nextQues (){
    count = count + 1
    loadQuiz()
    checkAns()

    if(count === 3){
      btnEl.innerText = "Submit"   
    }
   

}
function checkAns (){
    let correctAns = 0
quizobj.forEach(()=>{
    const selectedRadio = document.querySelector('input[name="ans"]:checked');
    console.log(selectedRadio)
if(selectedRadio && selectedRadio.value === quizobj[count].correctAnswer ){
 return  correctAns++
}

})
}  

checkAns()











