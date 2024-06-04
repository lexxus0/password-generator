// 'use strict';

// const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
// const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const numberChars = '0123456789';
// const symbolChars = '!-$^*+_';
// const spaceChar = ' ';

// function getRandomChar(chars) {
//     const index = Math.floor(Math.random() * chars.length);
//     return chars[index];
// }

// function generatePassword() {
//   const passwordInput = document.getElementById("password");
//   const lowercaseCheckbox = document.getElementById("lowercase");
//   const uppercaseCheckbox = document.getElementById("uppercase");
//   const numbersCheckbox = document.getElementById("numbers");
//   const symbolsCheckbox = document.getElementById("symbols");
//   const excludeDuplicateCheckbox = document.getElementById("exc-duplicate");
//   const spacesCheckbox = document.getElementById("spaces");
// }

// let characters = '';
// if(lowercaseCheckbox.checked) characters += lowerCaseChars;
// if(uppercaseCheckbox.checked) characters += upperCaseChars;
// if(numbersCheckbox.checked) characters += numberChars;
// if(symbolsCheckbox.checked) characters += symbolChars;
// if(spacesCheckbox.checked) characters += spaceChar;

// if(characters === "") {
//     passwordInput.value = "";
//   } else {
//     passwordInput.value = characters;
//   }

// let password = '';
// const length = 12;

// while (password.length < length){
//     let char = getRandomChar(characters);
//     if(excludeDuplicateCheckbox.checked && password.includes(char)) continue;
//     password +=char;
// }

// passwordInput.value = password;

// function copyPassword() {
//     const passwordInput = document.getElementById('password');
//     const copyButton = document.getElementById('copy');

//     if (navigator.clipboard) {
//       navigator.clipboard.writeText(passwordInput.value)
//         .then(() => {
//           passwordInput.disabled = true;
//           copyButton.textContent = 'copied';

//           setTimeout(() => {
//             copyButton.textContent = 'copy';
//           }, 2000);
//         })
//         .catch(err => {
//           console.error('Failed to copy password:', err);
//           // Handle copy failure gracefully (e.g., display an error message)
//         });
//       return;
//     }
// }

'use strict';

const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!-$^*+_';
const spaceChar = ' ';

function getRandomChar(chars) {
  const index = Math.floor(Math.random() * chars.length);
  return chars[index];
}

function generatePassword() {
  const passwordInput = document.getElementById('password');
  const lowercaseCheckbox = document.getElementById('lowercase');
  const uppercaseCheckbox = document.getElementById('uppercase');
  const numbersCheckbox = document.getElementById('numbers');
  const symbolsCheckbox = document.getElementById('symbols');
  const excludeDuplicateCheckbox = document.getElementById('exc-duplicate');
  const spacesCheckbox = document.getElementById('spaces');

  let characters = '';
  if (lowercaseCheckbox.checked) characters += lowerCaseChars;
  if (uppercaseCheckbox.checked) characters += upperCaseChars;
  if (numbersCheckbox.checked) characters += numberChars;
  if (symbolsCheckbox.checked) characters += symbolChars;
  if (spacesCheckbox.checked) characters += spaceChar;

  if (characters === '') {
    passwordInput.value = '';
  } else {
    passwordInput.value = characters;
  }

  let password = '';
  const length = 12;

  while (password.length < length) {
    let char = getRandomChar(characters);
    if (excludeDuplicateCheckbox.checked && password.includes(char)) continue;
    password += char;
  }

  passwordInput.value = password;
}

function copyPassword() {
  const passwordInput = document.getElementById('password');
  const copyButton = document.getElementById('copy');

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(passwordInput.value)
      .then(() => {
        passwordInput.disabled = true;
        copyButton.textContent = 'copied';

        setTimeout(() => {
          copyButton.textContent = 'copy';
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy password:', err);
      });
    return;
  }
}

