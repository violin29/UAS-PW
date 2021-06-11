<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>qUizy | Kuis</title>
  <link rel="icon" href="1.png">
  <link rel="stylesheet" type="text/css" href="style.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
</head>
<body>
  
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">qUizy</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="profile.html">My Profile</a>
        </li>
      </ul>
    </div>
  </nav>


  <!--quiz-container-->
  <div id="quiz-container">
      <!--question container-->
      <div class="questions">
          <h2 id="question"></h2>
          <ol type="A">
              <li class="option"><span id="option0" onclick="calcScore(this)"></span></li>
              <li class="option"><span id="option1" onclick="calcScore(this)"></span></li>
              <li class="option"><span id="option2" onclick="calcScore(this)"></span></li>
              <li class="option"><span id="option3" onclick="calcScore(this)"></span></li>
          </ol>
          <h4 id="stat"></h4>
      </div>

      <div class="buttons">
          <button type="button" class="next">Next</button>
      </div>
  </div>

  <!--Skor-->
  <div id="scoreboard">
      <img src="1.png" style="width: 5.5rem; height: 5.2rem;">
      <h2 id="score-title">Skor Anda</h2>
      <h2 id="score"></h2>
      <button type="button" id="score-btn" onclick="backToQuiz()">Ulangi</button>
      <button type="button" id="check-answer" onclick="checkAnswer()">Lihat Jawaban</button>
  </div>

  <!--Jawaban-->
  <div id="answerBank">
      <h2>Jawaban:</h2>
      <ol type="1" id="answers">

      </ol>
      <button type="button" id="score-btn" onclick="backToQuiz()">Ulangi</button>
  </div>
  
  <!--javascript file source-->
  <script src="index.js"> </script>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>