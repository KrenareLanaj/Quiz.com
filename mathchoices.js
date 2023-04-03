// Preview button
const previewButton = document.getElementById('preview-button');
previewButton.addEventListener('click', () => {
  alert('Game preview not available yet!');
});

// Difficulty buttons
const easyButton = document.getElementById('easy-button');
const averageButton = document.getElementById('average-button');
const hardButton = document.getElementById('hard-button');

easyButton.addEventListener('click', () => {
  console.log('Difficulty level: Easy');
});

averageButton.addEventListener('click', () => {
  console.log('Difficulty level: Average');
});

hardButton.addEventListener('click', () => {
  console.log('Difficulty level: Hard');
});
