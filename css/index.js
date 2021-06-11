//Pertanyaan
var questionBank=[
  {
    question:'Di manakah ibukota Indonesia?',
    option:['Jakarta','Medan','Padang','Surabaya'],
    answer:'Jakarta'
  },
  {
    question:'Samudera manakah yang terbesar di dunia?',
    option:['Samudera Atlantik','Samudera Artik','Samudera Pasifik','Samudera Hindia'],
    answer:'Samudera Pasifik'
  },
  {
    question:'IX merupakan angka romawi berapa?',
    option:['9','110','7','11'],
    answer:'9'
  },
  {
    question:'Bilangan prima terkecil adalah...',
    option:['0','1','2','-1'],
    answer:'2'
  },
  {
    question:'Planet yang paling besar di tata surya adalah...',
    option:['Neptunus','Saturnus','Jupiter','Uranus'],
    answer:'Jupiter'
  },
  {
    question:'Berapa suhu tubuh manusia normal?',
    option:['98.6℉(37℃)','88.6℉(31℃)','108.6℉(42.6℃)','37℉(2.8℃)'],
    answer:'98.6℉(37℃)'
  },
  {
    question:'Berapa banyak tulang yang dimiliki pria/wanita dewasa yang normal?',
    option:['206','308','102','509'],
    answer:'206'
  },
  {
    question:'Apa rumus kimia dari air?',
    option:['H₂O','H₂O₂','HO₂','H₃O₂'],
    answer:'H₂O'
  },
  {
    question:'Siapakah yang menemukan arus bolak-balik?',
    option:['Nikola Tesla','Elon Musk','Thomas Alva Edison','Isaac Newton'],
    answer:'Nikola Tesla'
  },
  {
    question:'Dimana Albert Einstein lahir?',
    option:['Amerika Serikat','Jerman','Switzerland','Austria'],
    answer:'Jerman'
  },
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scoreboard= document.getElementById('scoreboard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score=0;

//function pertanyaan
function displayQuestion(){
    for(var a=0;a<span.length;a++){
    span[a].style.background='none';
  }
  question.innerHTML=(i+1)+'. '+questionBank[i].question;
  option0.innerHTML= questionBank[i].option[0];
  option1.innerHTML= questionBank[i].option[1];
  option2.innerHTML= questionBank[i].option[2];
  option3.innerHTML= questionBank[i].option[3];
  stat.innerHTML="Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function skor
function calcScore(e){
  if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
  {
    score=score+1;
    document.getElementById(e.id).style.background= 'limegreen';
  }
  else{
    document.getElementById(e.id).style.background='tomato';
  }
  setTimeout(nextQuestion,350);
}

//function pertanyaan selanjutnya
function nextQuestion(){
  if(i<questionBank.length-1)
  {
    i=i+1;
    displayQuestion();
  }
  else{
    points.innerHTML= score+'/'+questionBank.length;
    quizContainer.style.display='none';
    scoreboard.style.display='block';
  }
}

//click to next button
next.addEventListener('click',nextQuestion);

//function ulangi
function backToQuiz(){
  location.reload();
}

//function check jawaban
function checkAnswer(){
  var answerBank= document.getElementById('answerBank');
  var answers= document.getElementById('answers');
  answerBank.style.display='block';
  scoreboard.style.display='none';
  for(var a=0;a<questionBank.length;a++)
  {
    var list=document.createElement('li');
    list.innerHTML= questionBank[a].answer;
    answers.appendChild(list);
  }
}


displayQuestion();