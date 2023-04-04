const quiz = [
    {
      question: "20 = 3x + 8; x = ?",
      choices: ["3", "2", "4", "5"],
      answer: "4"
    },
    {
      question: "If y = 3x + 12 and y = 5, what is x?",
      choices: ["7/3", "3/7", "-7", "-7/3"],
      answer: "-7/3"
    },
    {
      question: " What is the approximate value of the square root of 1596?",
      choices: ["15", "23", "40", "50"],
      answer: "40"
    }
  ];
  
  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const submitBtn = document.getElementById("submit");
  const resultEl = document.getElementById("result");
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuizQuestion = quiz[currentQuestion];
    questionEl.textContent = currentQuizQuestion.question;
  
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
  
  