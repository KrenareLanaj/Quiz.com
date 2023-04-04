const quiz = [
    {
      question: "Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
      choices: ["tag", "id", "class", "both class and tag"],
      answer: "id"
    },
    {
      question: "Which of the following type of HTML tag is used to define an internal style sheet?",
      choices: ["<script>", "<link>", "<class>", "<style>"],
      answer: "<style>"
    },
    {
      question: "Which of the following CSS Property sets the stacking order of positioned elements?",
      choices: ["y-index", "z-index", "x-index", "all of the mentioned"],
      answer: "z-index"
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
  
  