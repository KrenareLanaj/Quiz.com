const quiz = [
    {
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png",
      choices: ["United States", "Canada", "Mexico", "Brazil"],
      answer: "United States"
    },
    {
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/320px-Bandera_de_Espa%C3%B1a.svg.png",
      choices: ["France", "Italy", "Spain", "Portugal"],
      answer: "Spain"
    },
    {
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/320px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
      choices: ["Australia", "United Kingdom", "New Zealand", "South Africa"],
      answer: "United Kingdom"
    }
  ];
  
  const flagEl = document.getElementById("flag");
  const choicesEl = document.getElementById("choices");
  const submitBtn = document.getElementById("submit");
  const resultEl = document.getElementById("result");
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuizQuestion = quiz[currentQuestion];
    flagEl.src = currentQuizQuestion.flag;
  
    // shuffle the choices
    shuffle(currentQuizQuestion.choices);
  
    choicesEl.innerHTML = "";
    for (let i = 0; i < currentQuizQuestion.choices.length; i++) {
      const choice = currentQuizQuestion.choices[i];
      const choiceEl = document.createElement("div");
      choiceEl.className = "choice";
      choiceEl.textContent = choice;
      choiceEl.addEventListener("click", function() {
        checkAnswer(choice);
      });
      choicesEl.appendChild(choiceEl);
    }
  }
  
  // Fisher-Yates shuffle algorithm
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function checkAnswer(choice) {
    const currentQuizQuestion = quiz[currentQuestion];
    const choiceEls = choicesEl.children;
    if (choice === currentQuizQuestion.answer) {
      score++;
      setTimeout(() => {
        choiceEls[currentQuizQuestion.choices.indexOf(choice)].style.backgroundColor = "#3CB371";
      }, 500);
    } else {
      setTimeout(() => {
        choiceEls[currentQuizQuestion.choices.indexOf(choice)].style.backgroundColor = "#FF5733";
      }, 500);
    }
    for (let i = 0; i < choiceEls.length; i++) {
      choiceEls[i].removeEventListener("click", checkAnswer);
    }
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      setTimeout(loadQuestion, 1000);
    } else {
      setTimeout(showResult, 1000);
    }
  }
  
  function showResult() {
    const scoreString = `You scored ${score} out of ${quiz.length}!`;
    const scoreParam = encodeURIComponent(scoreString);
    window.location.href = `results.html?score=${scoreParam}`;
  }
  
  loadQuestion();
  