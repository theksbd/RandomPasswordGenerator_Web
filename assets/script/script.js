const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomCharacter = () => getRandomNumber(0, 3);

function loopToGenerate(currentCharacter) {
  // 0: lowercase, 1: uppercase, 2: number, 3: symbol (~`!@#$%^&*()_-+={[}]|:;",.?/)
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
      const symbol = ['~', '`', '@', '#', '$', '%', '^', '&', '_', '=', '(', ')', '[', ']', '{', '}', '+', '-', '*', '/', '|', ':', ';', ',', '.', '?', '"', '!'];
      value = getRandomNumber(0, symbol.length - 1);
      value = symbol[value];
      break;
  }
  return currentCharacter === 3 ? value : String.fromCharCode(value);
}

function generatePassword() {
  let res = "";
  const passwordLength = document.getElementById("password-length").value;
  const result = document.getElementById("result-text");
  if (passwordLength <= 0)
    result.innerText = "Your length is invalid to create a password";
  else if (passwordLength >= 80)
    result.innerText = "Your length will break my effort to make this website as responsive as possible :((";
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

    const isValidChoice = userSelection.some(selection => selection == true);
    if (isValidChoice) {
      while (res.length < passwordLength) {
        const currentCharacter = randomCharacter();
        if (userSelection[currentCharacter] == false)
          continue;
        res += loopToGenerate(currentCharacter);
      }
    }

    if (res.length == 0) {
      result.innerText = "Please choose at least one choice from above to generate your password";
    }
    else {
      result.innerText = `${res} is your password`;
    }
  }
}