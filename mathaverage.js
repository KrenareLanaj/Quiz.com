const quiz = [
    {
      question: "In a recipe, you have to add one cup of sugar for every four cups of flour. What is the ratio of sugar to flour?",
      choices: ["4:1", "2:4", "1:2", "1:4"],
      answer: "1:4"
    },
    {
      question: " It takes Matt four hours to mow two lawns. How many lawns can he mow in ten hours?",
      choices: ["Two lawns", "Five lawns", "Ten lawns", "Six lawns"],
      answer: "Five lawns"
    },
    {
      question: " If Davids age is 27 years old in 2011. What was his age in 2003?",
      choices: ["17 years", "37 years", "20 years", "19 years"],
      answer: "19 years"
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
  
  