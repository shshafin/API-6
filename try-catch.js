const checkAge = () => {
  const inputField = document.getElementById("inp");
  const inputText = Number(inputField.value);
  const errorTag = document.getElementById("error");

  try {
    if (isNaN(inputText)) {
      throw "Please provide a number";
    } else if (inputText < 18) {
      throw "Children's not allowed";
    } else if (inputText > 30) {
      throw "Murobbi's not allowed";
    }
    errorTag.innerHTML = "";
  } catch (err) {
    errorTag.innerText = "ERROR:" + err;
  } finally {
    console.log("All problem solved");
  }
};
