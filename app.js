const input = document.querySelector("#input");
const button = document.querySelector("#button");
const list = document.querySelector("#list");

button.addEventListener("click", function() {
  if (input.value.trim() === "") {
    return;
  }
  
  const newItem = document.createElement("li");
  const deleteButton = document.createElement("button");
  
  newItem.textContent = input.value;
  deleteButton.textContent = "❌";
  
  newItem.appendChild(deleteButton);
  list.appendChild(newItem);
  
  deleteButton.addEventListener("click", function() {
    newItem.remove();
  });
  
  input.value = "";
  input.focus();
});
