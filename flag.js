// List of countries and their flags
const countries = [
    { name: 'Argentina', flag: 'flags/argentina.png' },
    { name: 'Brazil', flag: 'flags/brazil.png' },
    { name: 'Canada', flag: 'flags/canada.png' },
    { name: 'China', flag: 'flags/china.png' },
    { name: 'France', flag: 'flags/france.png' },
    { name: 'Germany', flag: 'flags/germany.png' },
    { name: 'India', flag: 'flags/india.png' },
    { name: 'Italy', flag: 'flags/italy.png' },
    { name: 'Japan', flag: 'flags/japan.png' },
    { name: 'Mexico', flag: 'flags/mexico.png' },
    { name: 'Russia', flag: 'flags/russia.png' },
    { name: 'South Africa', flag: 'flags/south-africa.png' },
    { name: 'Spain', flag: 'flags/spain.png' },
    { name: 'United Kingdom', flag: 'flags/united-kingdom.png' },
    { name: 'United States', flag: 'flags/united-states.png' }
    ];
    
    // Selecting HTML elements
    const options = document.querySelectorAll('.option');
    const nextButton = document.querySelector('.next-button');
    const question = document.querySelector('.question');
    const score = document.querySelector('.score');
    const result = document.querySelector('.result');
    
    // Setting up variables
    let correctAnswerIndex;
    let currentScore = 0;
    let questionsAsked = 0;
    
    // Function to generate a new question
    function generateQuestion() {
    // Shuffle the countries array and select the first four countries
    const shuffledCountries = shuffleArray(countries);
    const questionCountries = shuffledCountries.slice(0, 4);
    // Select a random index for the correct answer
    correctAnswerIndex = Math.floor(Math.random() * 4);
    // Set the question text and option images
    question.textContent = 'Which country does this flag belong to?';
    options.forEach((option, index) => {
    option.innerHTML =' <img src="${questionCountries[index].flag}" alt="${questionCountries[index].name}">';
    });
    }
    // Function to check the answer and update the score
    function checkAnswer(selectedIndex) {
    if (selectedIndex === correctAnswerIndex) {
    currentScore++;
    result.textContent = 'Correct!';
    result.classList.remove('wrong');
    result.classList.add('correct');
    } else {
    result.textContent = 'Wrong!';
    result.classList.remove('correct');
    result.classList.add('wrong');
    }
    score.textContent = 'Score: ${currentScore} / ${questionsAsked}';
    }
    
    // Event listeners for the options
    options.forEach((option, index) => {
    option.addEventListener('click', () => {
    checkAnswer(index);
    questionsAsked++;
    options.forEach(option => option.classList.add('disabled'));
    nextButton.classList.remove('hidden');
    });
    });
    
    // Event listener for the next button
    nextButton.addEventListener('click', () => {
    generateQuestion();
    options.forEach(option => option.classList.remove('disabled'));
    nextButton.classList.add('hidden');
    });
    
    // Generate the first question
    generateQuestion();