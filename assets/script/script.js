// const password_length = document.getElementById("length").value;
// const lowercase = document.getElementById("lowercase");
// console.log(lowercase);

// const generate = document.getElementById("submit").onclick = function() {
//     console.log("Hello");
// }

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomCharacter = () => getRandomNumber(0, 3);

function loopToGenerate(currentCharacter) {
  // 0: lowercase, 1: uppercase, 2: number, 3: symbol (@#$%+-*/!)
  let value = "";
  switch (currentCharacter) {
    case 0:
      value = getRandomNumber('a'.charCodeAt(0), 'z'.charCodeAt(0));
      break;
    case 1:
      value = getRandomNumber('A'.charCodeAt(0), 'Z'.charCodeAt(0));
      break;
    case 2:
      value = getRandomNumber('0'.charCodeAt(0), '9'.charCodeAt(0));
      break;
    default:
      const symbol = ['@', '#', '$', '%', '+', '-', '*', '/', '!'];
      value = getRandomNumber(0, 8);
      value = symbol[value];
      break;
  }
  return currentCharacter === 3 ? value : String.fromCharCode(value);
}

function generatePass() {
  let res = "";
  const passwordLength = document.getElementById("password-length").value;
  const result = document.getElementById("result-text");
  if (passwordLength <= 0)
    result.innerText = "Your length is invalid to create a password";
  else {
    const containLowercase = document.querySelector("#lowercase").checked;
    const containUppercase = document.querySelector("#uppercase").checked;
    const containNumber = document.querySelector("#number").checked;
    const containSymbol = document.querySelector("#symbol").checked;

    const userSelection = [false, false, false, false];
    if (containLowercase == true)
      userSelection[0] = true;
    if (containUppercase == true)
      userSelection[1] = true;
    if (containNumber == true)
      userSelection[2] = true;
    if (containSymbol == true)
      userSelection[3] = true;

    while (res.length < passwordLength) {
      const currentCharacter = randomCharacter();
      if (userSelection[currentCharacter] == false)
        continue;
      res += loopToGenerate(currentCharacter);
    }
    result.innerText = `${res} is your password`;
  }
}