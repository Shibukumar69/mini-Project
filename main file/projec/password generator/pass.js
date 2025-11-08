// const pass = document.getElementById("pass");
// const btn = document.querySelector("button");
// const copy = document.querySelector(".fa-copy");

// function generatePassword() {
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()";
//   let password = "";
//   for (let i = 0; i < 10; i++) {  // 10-letter password
//     password += chars[Math.floor(Math.random() * chars.length)];
//   }
//   pass.value = password;
// }

// btn.addEventListener("click", generatePassword);

// copy.addEventListener("click", () => {
//   pass.select();
//   document.execCommand("copy");
//   alert("Password copied!");
// });

const pass=document.querySelector("#pass");
const btn=document.querySelector("button");
const copy = document.querySelector(".fa-copy");
const generatePassword=()=>{
    const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()";
    let password=" ";
    for(let i=0;i<12;i++){
     password+=chars[Math.floor(Math.random()*chars.length)];
    }
    pass.value=password;

}
btn.addEventListener("click",generatePassword);

copy.addEventListener("click",()=>{
 pass.select();
 document.execCommand("copy");
 alert("Password copied!");

});