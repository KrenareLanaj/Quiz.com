const urlParams = new URLSearchParams(window.location.search);
const scoreParam = urlParams.get("score");
const scoreEl = document.getElementById("score");
scoreEl.textContent = scoreParam;

