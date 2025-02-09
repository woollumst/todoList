const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${input.value} <button onclick="removeTask(this)">Remove</button>`;
        todoList.appendChild(li);
        input.value = "";
    }
});

function removeTask(button) {
    button.parentElement.remove();
}