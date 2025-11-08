// function ADDTASK(){
//     inputtask=document.querySelector("#task");
//     const newtask=document.createElement("li");
//     const tasklist=document.querySelector("#tasklist").appendChild(newtask);
//     newtask.textContent=document.querySelector("#task").value;
//     inputtask.value="";
//     deletetask(newtask);
// }
// function deletetask(newtask){
// const dbtn=document.createElement("button");
//  dbtn.textContent="Delete";
//  newtask.appendChild(dbtn);
//     dbtn.onclick = function () {
//     newtask.remove();  
//   }
// }

// chat gpt code//
function ADDTASK() {
  const inputtask = document.querySelector("#task");
  const taskValue = inputtask.value.trim();

  if (taskValue === "") return; // khali task na ho

  const newtask = document.createElement("li");
  newtask.textContent = taskValue;

  const dbtn = document.createElement("button");
  dbtn.textContent = "Delete";
  newtask.appendChild(dbtn);

  dbtn.onclick = function () {
    newtask.remove();
    deleteTask(taskValue);
  };

  document.querySelector("#tasklist").appendChild(newtask);
  saveTask(taskValue);
  inputtask.value = "";
}

// ✅ Task save karo
function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ✅ Task delete karo
function deleteTask(taskToDelete) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(t => t !== taskToDelete);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ✅ Page reload hone pe tasks wapas dikhao
window.onload = function () {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(taskValue => {
    const newtask = document.createElement("li");
    newtask.textContent = taskValue;

    const dbtn = document.createElement("button");
    dbtn.textContent = "Delete";
    newtask.appendChild(dbtn);

    dbtn.onclick = function () {
      newtask.remove();
      deleteTask(taskValue);
    };

    document.querySelector("#tasklist").appendChild(newtask);
  });
};
document.querySelector("#task").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    ADDTASK();
  }
});