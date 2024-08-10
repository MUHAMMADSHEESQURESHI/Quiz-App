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
let optA = document.querySelectorAll("#option1")[0]
let optB = document.querySelectorAll("#option2")[0]
let optC = document.querySelectorAll("#option3")[0]
let optD = document.querySelectorAll("#option4")[0]
let btnEl = document.querySelectorAll("button")[0]

let flagNum = 0
function loadQuiz() {

  h1el.innerHTML = "Q" + (count + 1) + "). " + quizobj[count].question
  optA.innerHTML = quizobj[count].options[0]
  optB.innerHTML = quizobj[count].options[1]
  optC.innerHTML = quizobj[count].options[2]
  optD.innerHTML = quizobj[count].options[3]

  const radios = document.getElementsByName("ans");
  for (const radio of radios) {
      radio.checked = false;
  }

}

function nextQues() {
 getSelectedLabel()
 count = count +1
  loadQuiz();
  checkAnswer()
  calcScore()

  if(count === 4){
    btnEl.innerHTML = "Submit"
  }
  flagNum = flagNum + 1
console.log(count)
}

let inputAns ;
const radios = document.getElementsByName("ans")

function getSelectedLabel() {
  let selectedLabel = ""

  for (const radio of radios) {
    if (radio.checked) {
      const label = document.querySelector(`label[for='${radio.id}']`);
      selectedLabel = label.innerText;
      break
    }

  }
  console.log("Selected Answer:", selectedLabel);
  inputAns = selectedLabel
  return selectedLabel;
}
loadQuiz()
let score = 0
let correctAns = false
function checkAnswer (){
  if(inputAns === quizobj[flagNum].correctAnswer){
 console.log("correct ans")
 return correctAns = true

  }
  else{
    console.log("wrong ans")
    return correctAns = false

  }


 
}

function calcScore (){
  console.log(correctAns)
    if(correctAns ){
    score = score + 10
  }
  console.log("your score is " + score)

}
let hiddEl = document.querySelectorAll(".quiz-selection")[0]
// let hiddEl = document.querySelectorAll(".quiz")[0]
console.log(hiddEl)
function resultScreen(){
  let calculate = (score / 50)*100
  
  hiddEl.innerHTML = `<h1>Your score is ${calculate}%</h1>`
}
function question (){
  if(btnEl.innerHTML === "Submit" ){
    resultScreen()
    
    }
    else{

      nextQues()
    }




}

