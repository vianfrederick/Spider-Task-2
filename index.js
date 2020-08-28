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
const navBtn = document.querySelectorAll(".nav-btn");
const navBar = document.querySelector(".navbar")
const timeBar = document.querySelector(".time-bar");
const timeTable = document.querySelector(".time-table");
const resultTable = document.querySelector(".result-table");
const resultBar = document.querySelector(".result-bar");
const candidateName = document.querySelector(".input");
const name = document.querySelector(".name");
const submittedDate = document.querySelector(".submittedDate");
const submittedTime = document.querySelector(".submittedTime");
const highScoreTable = document.querySelector(".highScore-table");
const highScoreData = document.querySelector(".high-score");
const highScoreDate = document.querySelector(".high-score-date");
const highScoreTime = document.querySelector(".high-score-time");

const qn1 = document.querySelector(".qn1");
const qn2 = document.querySelector(".qn2");
const qn3 = document.querySelector(".qn3");
const qn4 = document.querySelector(".qn4");
const qn5 = document.querySelector(".qn5");
const qn6 = document.querySelector(".qn6");
const qn7 = document.querySelector(".qn7");
const qn8 = document.querySelector(".qn8");
const qn9 = document.querySelector(".qn9");
const qn10 = document.querySelector(".qn10");
const totalTime = document.querySelector(".totTime");

var resultTime = {
  seconds : 0,
  minutes : 0,
  correctSecondsFormat : "0"
}

var time = {
  seconds : 0,
  minutes : 10,
  correctSecondsFormat : "0"
}
let interval;
let wrong = 0;
let attempt = 0;
let correct = 0;
let i = 0;
var option1 = document.querySelectorAll(".option");
let score = 0;
var correctOption;
let questionTimeInterval;
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
       correctId : 3,
       time : {
         seconds : 0,
         minutes : 0
       }
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
       correctId : 3,
       time : {
         seconds : 0,
         minutes : 0
       }
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
       correctId : 0,
       time : {
         seconds : 0,
         minutes : 0
       }
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
       correctId : 2,
       time : {
         seconds : 0,
         minutes : 0
       }
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
       correctId : 0,
       time : {
         seconds : 0,
         minutes : 0
       }
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
       correctId : 0,
       time : {
         seconds : 0,
         minutes : 0
       }
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
       correctId : 3,
       time : {
         seconds : 0,
         minutes : 0
       }
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
       correctId : 3,
       time : {
         seconds : 0,
         minutes : 0
       }
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
       correctId : 3,
       time : {
         seconds : 0,
         minutes : 0
       }
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
       correctId : 2,
       time : {
         seconds : 0,
         minutes : 0
       }
  }
];



for(var j=0;j<10;j++){
  navBtn[j].setAttribute("onclick","getApproQuestion(this)");
}

function getApproQuestion(ele){
   i = parseInt(ele.value);
   clearInterval(questionTimeInterval);
  getQuestion();
}

function stopWatch() {
  resultTime.seconds++;

  time.seconds--;
  if(time.seconds ==(-1)){
    time.seconds=59;
    time.minutes--;

  }

 if(resultTime.seconds == 60){
   resultTime.seconds = 0;
   resultTime.minutes++;
 }

 if(resultTime.seconds <10){
   resultTime.correctSecondsFormat = "0" + resultTime.seconds;
 }

 else{
   resultTime.correctSecondsFormat = resultTime.seconds;
 }

  if(time.seconds < 10){
    time.correctSecondsFormat = "0" + time.seconds;
  }
  else{
    time.correctSecondsFormat = time.seconds;
  }

  timeBar.innerHTML = time.minutes +':'+ time.correctSecondsFormat;

if(time.minutes == 0 && time.seconds == 0){
  clearInterval(questionTimeInterval);
  clearInterval(interval);
  time.minutes = 1;
  time.seconds = 0;
  showScore();
}
  // localStorage.setItem("SECONDSEASY", seconds);
  // localStorage.setItem("MILLISECONDSEASY", milliSeconds);
  // nettime = (seconds*1000) + milliSeconds;
  // localStorage.setItem("NETTIMEEASY", nettime);
}


var randomizedQuiz = [];
var availableQuestion = [];
availableQuestion = quiz;
let counter = 0;
let k;
while(counter<10){
  k = Math.floor(Math.random() * availableQuestion.length);
  randomizedQuiz.push(availableQuestion[k]);
  availableQuestion.splice(k,1);
  counter = counter + 1;
}


function showInstruction(){
  if(candidateName.value){
  document.querySelector(".intro-box").classList.add("hide");
  box1.classList.add("hide");
  box2.classList.remove("hide");
  homeBox.classList.remove("hide");
}
}

function startQuiz(){
  if(candidateName.value){
  interval = setInterval(stopWatch,1000);
  document.querySelector(".intro-box").classList.add("hide");
  box1.classList.add("hide");
  quizBox.classList.remove("hide");
  box3.classList.remove("hide");
  timeBar.classList.remove("hide");
  navBar.classList.remove("hide");
  getQuestion();
}
}

function moveToQuestions() {
  interval = setInterval(stopWatch,1000);
  box2.classList.add("hide");
  homeBox.classList.add("hide");
  box3.classList.remove("hide");
  quizBox.classList.remove("hide");
  timeBar.classList.remove("hide");
  navBar.classList.remove("hide");
  getQuestion();
}

function getQuestion() {

  if (i >= 0 && i <= 9) {

    if(randomizedQuiz[i].answered == false){
      for(var j = 0;j <4 ; j++){
        options[j].style.backgroundColor = "#cccccc";
      }
      questionTimeInterval = setInterval(function(){
        randomizedQuiz[i].time.seconds ++;
        if(randomizedQuiz[i].time.seconds/60 == 0){
          randomizedQuiz[i].time.seconds = 0;
          randomizedQuiz[i].time.minutes++;
        }
      },1000);
    }

       // console.log(quiz[i].chosenId);
       // console.log(quiz[i].correctId);
       // console.log(typeof(quiz[i].chosenId));
       // console.log(typeof(quiz[i].correctId));

    questionNumber.innerHTML = "Question " + String(i + 1);
    questionText.innerHTML = randomizedQuiz[i].question;


    // for (var j = 0; j < 4; j++) {
    //   options[j].innerHTML = quiz[i].options[j];
    // }
    for (var j = 0; j < 4; j++) {

      options[j].innerHTML = randomizedQuiz[i].options[j];
      //  option = document.createElement("div");
      // option.innerHTML = quiz[i].options[j];
      // option.id = j;
      // option.className = "option";
      // optionBox.appendChild(option);

      if (options[j].innerHTML == randomizedQuiz[i].correctAnswer) {
        correctOption = options[j];
      }
      options[j].setAttribute("onclick", "checkCorrectOrWrong(this)");
    }
    if(randomizedQuiz[i].answered == true){
        for (var j = 0; j < 4; j++) {
          options[j].style.backgroundColor = "#cccccc";
        }
      if(randomizedQuiz[i].chosenId == randomizedQuiz[i].correctId){
        console.log(options[randomizedQuiz[i].correctId].innerHTML);
           options[randomizedQuiz[i].correctId].style.backgroundColor = "Green";
      }
      else{
        console.log(options[randomizedQuiz[i].chosenId].innerHTML);
        options[randomizedQuiz[i].correctId].style.backgroundColor = "Green";
        options[parseInt(randomizedQuiz[i].chosenId)].style.backgroundColor = "Red";

      }
    }
  }
}

function nextQuestion() {

// option1 = document.querySelectorAll(".option");
  if (i >= 0 && i <= 9) {

    clearInterval(questionTimeInterval);

        if(i!=9){
   // // for (var j = 0; j < 4; j++) {
   // //   option1[j].remove();
   //
   //
   //   }
    ++i;

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

    clearInterval(questionTimeInterval);


    if (i != 0) {


// for (var j = 0; j < 4; j++) {
//   option1[j].remove();
//
//   }
      --i;


      getQuestion();
    }
  }
}

function checkCorrectOrWrong(element) {

navBtn[i].style.border = "3px solid darkgreen";

  if(randomizedQuiz[i].answered != true){
     attempt = attempt + 1;
  randomizedQuiz[i].answered = true;
  let correctAnswer = randomizedQuiz[i].correctAnswer;
  if (element.innerHTML == correctAnswer) {
    correct = correct + 1;
    score = score + 1;
    emoji[i].innerHTML = "&#128515;"
    element.style.backgroundColor = "Green";
    randomizedQuiz[i].chosenId = element.id;
  } else {
    wrong = wrong + 1;
    emoji[i].innerHTML = "&#128543;"
    element.style.backgroundColor = "Red";
    correctOption.style.backgroundColor = "Green";
     randomizedQuiz[i].chosenId = element.id;
  }
}
}


function showScore(){
  timeTable.classList.add("hide");
  highScoreTable.classList.add("hide");
    resultTable.classList.remove("hide");
    resultBar.classList.remove("hide");

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  let candidateTime = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();


  today = dd + '/' + mm + '/' + yyyy;
if(localStorage.getItem("HIGHSCORE")){
  var highScore = localStorage.getItem("HIGHSCORE");
  if(score > highScore){
    localStorage.setItem("HIGHSCORE",score);
  }
}
else{
  localStorage.setItem("HIGHSCORE",score);
}
if(localStorage.getItem("HIGHSCOREDATE")){

  if(score > highScore){
    localStorage.setItem("HIGHSCOREDATE",today);
  }
}
else{
  localStorage.setItem("HIGHSCOREDATE",today);
}
if(localStorage.getItem("HIGHSCORETIME")){

  if(score > highScore){
    localStorage.setItem("HIGHSCORETIME",candidateTime);
  }
}
else{
  localStorage.setItem("HIGHSCORETIME",candidateTime);
}
  clearInterval(questionTimeInterval);
    clearInterval(interval);
    timeBar.classList.toggle("hide");
    navBar.classList.toggle("hide");
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
  name.innerHTML = candidateName.value;
  submittedDate.innerHTML = today;
  submittedTime.innerHTML = candidateTime;
}

function goBackToIntroPage(){
  time.seconds = 0;
  time.minutes = 10;
  time.correctSecondsFormat = "0";
  resultTime.seconds = 0;
  resultTime.minutes = 0;
  resultTime.correctSecondsFormat = "0";
  timeBar.innerHTML = "10:00"
  for (var j =0; j< 10 ; j++){
    randomizedQuiz[j].time.seconds = 0;
    randomizedQuiz[j].time.minutes = 0;
    randomizedQuiz[j].answered = false;
    randomizedQuiz[j].chosenId = 0;
    emoji[j].innerHTML = '';
    navBtn[j].style.border = "3px solid white";
  }
   wrong = 0;
   attempt = 0;
   correct = 0;
   i = 0;
   score = 0;


  box4.classList.add("hide");
  box1.classList.toggle("hide");
  resultBox.classList.add("hide");
  document.querySelector(".intro-box").classList.toggle("hide");
}

function showCorrectQuestion(){

}

function goToTimeTable(){
   resultTable.classList.add("hide");
   timeTable.classList.remove("hide");
   resultBar.classList.add("hide");
   totalTime.innerHTML = resultTime.minutes + ":" + resultTime.correctSecondsFormat;
qn1.innerHTML = randomizedQuiz[0].time.minutes + ":" + randomizedQuiz[0].time.seconds;
qn2.innerHTML = randomizedQuiz[1].time.minutes + ":" + randomizedQuiz[1].time.seconds;
qn3.innerHTML = randomizedQuiz[2].time.minutes + ":" + randomizedQuiz[2].time.seconds;
qn4.innerHTML = randomizedQuiz[3].time.minutes + ":" + randomizedQuiz[3].time.seconds;
qn5.innerHTML = randomizedQuiz[4].time.minutes + ":" + randomizedQuiz[4].time.seconds;
qn6.innerHTML = randomizedQuiz[5].time.minutes + ":" + randomizedQuiz[5].time.seconds;
qn7.innerHTML = randomizedQuiz[6].time.minutes + ":" + randomizedQuiz[6].time.seconds;
qn8.innerHTML = randomizedQuiz[7].time.minutes + ":" + randomizedQuiz[7].time.seconds;
qn9.innerHTML = randomizedQuiz[8].time.minutes + ":" + randomizedQuiz[8].time.seconds;
qn10.innerHTML = randomizedQuiz[9].time.minutes + ":" + randomizedQuiz[9].time.seconds;
}

function goBack(){
  resultTable.classList.remove("hide");
  timeTable.classList.add("hide");
  resultBar.classList.remove("hide");
}

function showHighScore(){
   highScoreTable.classList.remove("hide");
   timeTable.classList.add("hide");
   highScoreData.innerHTML = localStorage.getItem("HIGHSCORE");
   highScoreDate.innerHTML = localStorage.getItem("HIGHSCOREDATE");
   highScoreTime.innerHTML = localStorage.getItem("HIGHSCORETIME");
}

function goBackAgain(){
  highScoreTable.classList.add("hide");
  resultTable.classList.remove("hide");
  resultBar.classList.remove("hide");
}
