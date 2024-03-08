let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  let enteredName = nameInput.value.trim();

  if (enteredName === "") {
    nameInput.textContent = "Anonymous";
  } else {
    nameInput.textContent = enteredName;
  }
});
