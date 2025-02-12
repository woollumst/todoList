const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${input.value} <button onclick="completeTask(this)">Complete</button><button onclick="removeTask(this)">Remove</button>`;
        todoList.appendChild(li);
        input.value = "";
    }
});

function completeTask(button) {
    //add strikethrough for complete?
    //button.parentElement ? add completed/strikethrough class?
}

function removeTask(button) {
    button.parentElement.remove();
}