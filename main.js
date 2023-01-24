const todoUnorderedList = document.querySelector("#list"); // <ul id="list"></ul>

function formSubmit(event) {
  event.preventDefault();
  const form = event.target; // <form></form>
  const data = new FormData(form);
  const value = Object.fromEntries(data.entries());
  
  const todoItem = document.createElement("li"); // <li></li>
  todoItem.innerText = value.todo; // <li>my-input</li>
  todoUnorderedList.appendChild(todoItem); // <ul><li>my-input</li></ul>

  form.reset();
}

const formReset = (event) => {
  form.reset();
}