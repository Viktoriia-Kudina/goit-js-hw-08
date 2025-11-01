const textInput = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const value = event.currentTarget.value.trim();

  spanOutput.textContent = value === "" ? "Anonymous" : value;
});
