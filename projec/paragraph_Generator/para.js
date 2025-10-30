let words = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  `Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.`,
  `Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.`,
  `Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.`,
  `Donec lobortis risus a elit. Etiam tempor.`,
  `Aenean vel massa quis mauris vehicula lacinia.`
];

const getparagraphs = () => {
  let userNumber = document.querySelector("#input").value;
  let outputDiv = document.querySelector(".output");

  // 🧹 Purane paragraphs hatao
  outputDiv.innerHTML = "";
  

  // ✅ Input check (agar user blank ya 0 likhe)
  if (userNumber <= 0 || isNaN(userNumber)) {
    outputDiv.innerText = "Please enter a valid number!";
    return;
  }

  // 📝 Paragraphs generate karo
  for (let i = 0; i < userNumber; i++) {
    let randomIndex = Math.floor(Math.random() * words.length);
    let para = document.createElement("p");
    para.innerText = words[randomIndex];
    para.style.fontSize="20px";
    outputDiv.appendChild(para);
  }
  input.value = "";
};

document.querySelector("#btn").addEventListener("click", getparagraphs);
