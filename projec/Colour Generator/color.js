const Getcolor=()=>{
    const RandomNumber=Math.floor(Math.random()*16777215);
    const Randomcode="#"+ RandomNumber.toString(16);
    console.log(RandomNumber,Randomcode);
    document.body.style.backgroundColor=Randomcode;
    document.querySelector("h2").innerText=Randomcode;
}
document.querySelector("#btn").addEventListener("click",Getcolor);
Getcolor();