// const password_length = document.getElementById("length").value;
// const lowercase = document.getElementById("lowercase");
// console.log(lowercase);

// const generate = document.getElementById("submit").onclick = function() {
//     console.log("Hello");
// }

let res = "";

function generatePass() {
  const length = document.getElementById("password-length").value;
  const result = document.getElementById("result-text");
  if (length <= 0)
    result.innerText = "Your length is invalid to create a password";
  else {
    const containLowercase = document.querySelector("#lowercase").checked;
    const containUppercase = document.querySelector("#uppercase").checked;
    const containNumber = document.querySelector("#number").checked;
    const containSymbol = document.querySelector("#symbol").checked;
      
    result.innerText = `${res} is your password`;
  }
}
