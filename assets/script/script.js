// const password_length = document.getElementById("length").value;
// const lowercase = document.getElementById("lowercase");
// console.log(lowercase);

// const generate = document.getElementById("submit").onclick = function() {
//     console.log("Hello");
// }

let res = "";

function generatePass() {
  let length = document.getElementById("password-length").value;
  if (length <= 0)
    document.getElementById("result-text").innerText =
      "Your length is invalid to create a password";
  else {
    let containLowercase = document.querySelector("#lowercase").checked;
    let containUppercase = document.querySelector("#uppercase").checked;
    let containNumber = document.querySelector("#number").checked;
    let containSymbol = document.querySelector("#symbol").checked;

    document.getElementById(
      "result-text"
    ).innerText = `${containLowercase} is your password`;
  }
}
