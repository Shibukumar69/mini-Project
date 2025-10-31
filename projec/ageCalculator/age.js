let userinput = document.querySelector("#pass");
let btn = document.querySelector("#btn");

// 👇 Input pe click karte hi calendar open ho jaye
userinput.addEventListener("click", () => {
  userinput.showPicker();
});

// 👇 Future date disable karne ke liye (max = today)
let today = new Date().toISOString().split("T")[0];
userinput.setAttribute("max", today);

// 👇 Ek paragraph banake container ke niche lagao
let resultPara = document.createElement("p");
resultPara.id = "result";
resultPara.style.marginTop = "20px";
resultPara.style.fontSize = "1.3rem";
resultPara.style.fontWeight = "600";
resultPara.style.color = "yellow";
document.querySelector(".container").appendChild(resultPara);

// 👇 Button listener
btn.addEventListener("click", () => {
  if (!userinput.value) {
    resultPara.textContent = "⚠️ Please select your birth date first!";
    resultPara.style.color = "orange";
    return;
  }

  let birthdate = new Date(userinput.value);
  let d1 = birthdate.getDate();
  let m1 = birthdate.getMonth() + 1;
  let y1 = birthdate.getFullYear();

  let current = new Date();
  let d2 = current.getDate();
  let m2 = current.getMonth() + 1;
  let y2 = current.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1;
    if (m3 < 0) {
      m3 = 11;
      y3--;
    }
  }

  // 👇 Result paragraph me show karo
  resultPara.style.color = "#00ffcc";
  resultPara.textContent = `🎉 Your Age is ${y3} Years, ${m3} Months, and ${d3} Days`;
});

// 👇 Helper function
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

