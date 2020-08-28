const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const options = document.querySelectorAll(".option");
const emoji = document.querySelectorAll(".emoji");
const resultBox = document.querySelector(".result-box");
const optionBox = document.querySelector(".option-text");
const totalAttempt = document.querySelector(".Total-Attempt");
const totalCorrect = document.querySelector(".Total-Correct");
const totalWrong = document.querySelector(".Total-Wrong");
const totalScore = document.querySelector(".Total-Score");
const percentage = document.querySelector(".Percentage");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");

let wrong = 0;
let attempt = 0;
let correct = 0;
let i = 0;
var option1 = document.querySelectorAll(".option");
let score = 0;
var correctOption;
const quiz = [{
    question: "Which of the following statement is/are correct about Favipiravir?",
    options: ["Favipiravir is an antiviral COVID-19 drug.",
      "Glenmark Pharmaceuticals under the brand name FabiFlu has launched an antiviral drug Favipiravir.",
      "It is India's first COVID-19 drug launched, priced at Rs 103 per tablet.",
      "All the above are correct"
    ],
    correctAnswer: "All the above are correct",
       answered : false,
       chosenId : 0,
       correctId : 3
  },
  {
    question: "How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?",
    options: [
      "More than 50",
      "More than 100",
      "More than 150",
      "More than 200"
    ],
    correctAnswer: "More than 200",
       answered : false,
       chosenId : 0,
       correctId : 3
  },
  {
    question: " Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?",
    options: [
      "Plasma Therapy",
      "Solidarity",
      "Remdesivir",
      "Hydroxychloroquine"
    ],
    correctAnswer: "Plasma Therapy",
       answered : false,
       chosenId : 0,
       correctId : 0
  },
  {
    question: "In a study, which cells are found in COVID-19 patients 'bode well' for long term immunity?",
    options: [
      "P-cell",
      "D-Cell",
      "T-Cell",
      "Endothelial Cells"
    ],
    correctAnswer: "T-Cell",
       answered : false,
       chosenId : 0,
       correctId : 2
  },
  {
    question: "Name the vaccine that is jointly developed by the German company BioNTech and US pharma giant Pfizer for COVID-19?",
    options: [
      "BNT162",
      "PICOVACC",
      "Both A and B",
      "Neither A nor B"
    ],
    correctAnswer: "BNT162",
       answered : false,
       chosenId : 0,
       correctId : 0
  },
  {
    question: " Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?",
    options: [
      "Plasma Therapy",
      "Solidarity",
      "Remdesivir",
      "Hydroxychloroquine"
    ],
    correctAnswer: "Plasma Therapy",
       answered : false,
       chosenId : 0,
       correctId : 0
  },
  {
    question: "How does Coronavirus transmit?",
    options: [
      "When a person sneezes or cough, droplets spread in the air or fall on the ground and nearby surfaces.",
      "If another person is nearby and inhales the droplets or touches these surfaces and further touches his face, eyes or mouth, he or she can get an infection.",
      "If the distance is less than 1 meter from the infected person.",
      "All the above are correct."
    ],
    correctAnswer: "All the above are correct.",
       answered : false,
       chosenId : 0,
       correctId : 3
  },
  {
    question: "What happens to a person suffering from COVID-19?",
    options: [
      "Around 80% of the people will require no treatment as such and will recover on their own.",
      "Around <20% or a small proportion may need hospitalisation.",
      "A very small proportion basically suffering from chronic illness may need admission in an Intensive Care Unit (ICU).",
      "All the above are correct"
    ],
    correctAnswer: "All the above are correct",
       answered : false,
       chosenId : 0,
       correctId : 3
  },
  {
    question: "In which age group the COVID-19 spreads?",
    options: [
      "COVID-19 occur in all age groups.",
      "Coronavirus infection is mild in children.",
      " Older person and persons with pre-existing medical conditions are at high risk to develop serious illness.",
      " All the above are correct"
    ],
    correctAnswer: " All the above are correct",
       answered : false,
       chosenId : 0,
       correctId : 3
  },
  {
    question: "What is Coronavirus?",
    options: [
      "It is a large family of viruses.",
      "It belongs to the family of Nidovirus.",
      "Both A and B are correct",
      "Only A is correct."
    ],
    correctAnswer: "Both A and B are correct",
       answered : false,
       chosenId : 0,
       correctId : 2
  }
];

function showInstruction(){
  document.querySelector(".intro-box").classList.add("hide");
  box1.classList.add("hide");
  box2.classList.remove("hide");
  homeBox.classList.remove("hide");
}

function startQuiz(){
  document.querySelector(".intro-box").classList.add("hide");
  box1.classList.add("hide");
  quizBox.classList.remove("hide");
  box3.classList.remove("hide");
  getQuestion();
}

function moveToQuestions() {
  box2.classList.add("hide");
  homeBox.classList.add("hide");
  box3.classList.remove("hide");
  quizBox.classList.remove("hide");
  getQuestion();
}

function getQuestion() {

  if (i >= 0 && i <= 9) {

       // console.log(quiz[i].chosenId);
       // console.log(quiz[i].correctId);
       // console.log(typeof(quiz[i].chosenId));
       // console.log(typeof(quiz[i].correctId));

    questionNumber.innerHTML = "Question " + String(i + 1);
    questionText.innerHTML = quiz[i].question;


    // for (var j = 0; j < 4; j++) {
    //   options[j].innerHTML = quiz[i].options[j];
    // }
    for (var j = 0; j < 4; j++) {

      options[j].innerHTML = quiz[i].options[j];
      //  option = document.createElement("div");
      // option.innerHTML = quiz[i].options[j];
      // option.id = j;
      // option.className = "option";
      // optionBox.appendChild(option);

      if (options[j].innerHTML == quiz[i].correctAnswer) {
        correctOption = options[j];
      }
      options[j].setAttribute("onclick", "checkCorrectOrWrong(this)");
    }
    if(quiz[i].answered == true){
        for (var j = 0; j < 4; j++) {
          options[j].style.backgroundColor = "#cccccc";
        }
      if(quiz[i].chosenId == quiz[i].correctId){
        console.log(options[quiz[i].correctId].innerHTML);
           options[quiz[i].correctId].style.backgroundColor = "Green";
      }
      else{
        console.log(options[quiz[i].chosenId].innerHTML);
        options[quiz[i].correctId].style.backgroundColor = "Green";
        options[parseInt(quiz[i].chosenId)].style.backgroundColor = "Red";

      }
    }
  }
}

function nextQuestion() {

// option1 = document.querySelectorAll(".option");
  if (i >= 0 && i <= 9) {
        if(i!=9){
   // // for (var j = 0; j < 4; j++) {
   // //   option1[j].remove();
   //
   //
   //   }
    ++i;
    if(quiz[i].answered == false){
      for(var j = 0;j <4 ; j++){
        options[j].style.backgroundColor = "#cccccc";
      }
    }
    // if (i == 10) {
    //   quizBox.classList.add("hide");
    //   resultBox.classList.remove("hide");
    // }

    getQuestion();
  }

}

}

function previousQuestion() {
// option1 = document.querySelectorAll(".option");
  if (i >= 0 && i <= 9) {

    if (i != 0) {


// for (var j = 0; j < 4; j++) {
//   option1[j].remove();
//
//   }
      --i;
      if(quiz[i].answered == false){
        for(var j = 0;j <4 ; j++){
          options[j].style.backgroundColor = "#cccccc";
        }
      }

      getQuestion();
    }
  }
}

function checkCorrectOrWrong(element) {



  if(quiz[i].answered != true){
     attempt = attempt + 1;
  quiz[i].answered = true;
  let correctAnswer = quiz[i].correctAnswer;
  if (element.innerHTML == correctAnswer) {
    correct = correct + 1;
    score = score + 1;
    emoji[i].innerHTML = "&#128515;"
    element.style.backgroundColor = "Green";
    quiz[i].chosenId = element.id;
  } else {
    wrong = wrong + 1;
    emoji[i].innerHTML = "&#128543;"
    element.style.backgroundColor = "Red";
    correctOption.style.backgroundColor = "Green";
     quiz[i].chosenId = element.id;
  }
}
}


function showScore(){
  box4.classList.remove("hide");
  box3.classList.add("hide");
  quizBox.classList.add("hide");
  resultBox.classList.remove("hide");
  let percentageValue = (correct/10) *100;
  totalAttempt.innerHTML = attempt;
  totalCorrect.innerHTML = correct;
  totalScore.innerHTML = score;
  totalWrong.innerHTML = wrong;
  percentage.innerHTML = percentageValue + "%";
}

function goBackToIntroPage(){
   wrong = 0;
   attempt = 0;
   correct = 0;
   i = 0;
   score = 0;
   for(var j=0;j<10;j++){
     quiz[j].chosenId = 0;
     quiz[j].answered = false;
   }
  box4.classList.add("hide");
  box1.classList.toggle("hide");
  resultBox.classList.add("hide");
  document.querySelector(".intro-box").classList.toggle("hide");
}
