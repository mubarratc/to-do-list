import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"
import { getDatabase, ref, set, push, remove, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"
//Firebase set up
const databaseConfig = {
  databseURL = "https://to-do-list-app-e7a1d-default-rtdb.firebaseio.com/"
}

const app = initializeApp(databaseConfig)
const databse = getDatabase(app)

// Decalring HTML Elements as variables
const buttonEL = document.getElementById("btn-el");
const input = document.getElementById("input-el");
const list = document.getElementById("list-el");
const li = document.getElementById("li-el");
const deleteButton = document.querySelectorAll("delete-el");
let tasks = [];

//adding an event listener that calls a function that reads the value from the textt box input and then add it's to a unordered list.

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log("The Enter Key was pressed!");
  } else {
    console.log("Didn't recognize enter!");
  }
});

buttonEL.addEventListener("click", function () {
  let inputValue = input.value;
  addTask(inputValue); //adds tasks to the front-end
  tasks.push(inputValue); //adds tasks to an array
  console.log(tasks);
  clearInput();
});

list.addEventListener("click", function (element) {
  if (element.target.classList.contains("delete-el")) {
    const listItem = element.target.closest("li");
    listItem.remove();
  }
});

function addTask(input) {
  let html = `<li class="list-el"><span> ${input}</span> <button class="delete-el">Delete</button></li>`;
  if (input === "") {
    return "";
  } else {
    list.innerHTML += html;
  }
}

function clearInput() {
  input.value = "";
}

function deleteTask() {
  let li = this.parentNode;
  list.removeChild(li);
}
