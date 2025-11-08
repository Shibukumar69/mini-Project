const quiz = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Home Tool Markup Language",
    c: "Hyperlinks and Text Markup Language",
    d: "Hyper Transfer Markup Language",
    correct: "a"
  },
  {
    question: "What does CSS stand for?",
    a: "Cascading Style Sheets",
    b: "Colorful Style Sheets",
    c: "Computer Style Sheets",
    d: "Creative Style Sheets",
    correct: "a"
  },
  {
    question: "What does JS stand for?",
    a: "JavaSyntax",
    b: "JavaSuper",
    c: "JavaScript",
    d: "JustScript",
    correct: "c"
  }
];

// Select elements
const questionEl = document.querySelector("h2");
const answerBtns = document.querySelectorAll(".btn");
const nextBtn = document.getElementById("submit");

let currentIndex = 0;
let score = 0;

// Load question
function loadQuestion() {
  const currentQuiz = quiz[currentIndex];
  questionEl.innerText = currentQuiz.question;

  const options = [currentQuiz.a, currentQuiz.b, currentQuiz.c, currentQuiz.d];
  answerBtns.forEach((btn, index) => {
    btn.innerText = options[index];
    btn.disabled = false;
    btn.style.backgroundColor = "white";
  });

  nextBtn.style.display = "none";
}

// When user selects an answer
answerBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const selected = ["a", "b", "c", "d"][i];
    const correct = quiz[currentIndex].correct;

    if (selected === correct) {
      btn.style.backgroundColor = "lightgreen";
      score++;
    } else {
      btn.style.backgroundColor = "salmon";
    }

    // disable all buttons
    answerBtns.forEach(b => (b.disabled = true));

    nextBtn.style.display = "block";
  });
});

// When Next is clicked
nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex < quiz.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz").innerHTML = `
      <h2>You scored ${score} / ${quiz.length} 🎉</h2>
      <button onclick="location.reload()" id="submit">Play Again</button>
    `;
  }
});

// start
loadQuestion();



