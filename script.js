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
  const passwordInput = document.getElementById("#password");
  const lowerCaseCheckbox = document.getElementById("#lowercase");
  const upperCaseCheckbox = document.getElementById("#uppercase");
  const numbersCheckbox = document.getElementById("#numbers");
  const symbolsCheckbox = document.getElementById("#symbols");
  const excludeDuplicateCheckbox = document.getElementById("#exc-duplicate");
  const spacesCheckbox = document.getElementById("#spaces");
}

let characters = '';
if(lowerCaseCheckbox.checked) characters += lowerCaseChars;
if(upperCaseCheckbox.checked) characters += upperCaseChars;
if(numbersCheckbox.checked) characters += numberChars;
if(symbolsCheckbox.checked) characters += symbolChars;
if(spacesCheckbox.checked) characters += spaceChar;

if(characters === ""){
    passwordInput.value == "";
    return;
}

let password = '';
const length = 12;

while (password.length < length){
    let char = getRandomChar(characters);
    if(excludeDuplicateCheckbox.checked && password.includes(char)) continue;
    password +=char;
}

passwordInput.value = password;

// function copyPassword(){
//     const passwordInput = document.getElementById('#password');
//     const copyButton = document.getElementById('#copy');

//     passwordInput.disabled = false;
//     passwordInput.select();
//     document.execCommand('#copy'); 
//     passwordInput.disabled = true;
    
//     copyButton.textContent = 'copied';
//     setTimeout(() => {
//         copyButton.textContent = 'copy';
//     }, 2000);

// }

function copyPassword() {
    const passwordInput = document.getElementById('password');
    const copyButton = document.getElementById('copy');
  
    if (navigator.clipboard) {
      navigator.clipboard.writeText(passwordInput.value)
        .then(() => {
          passwordInput.disabled = true;
          copyButton.textContent = 'copied';
  
          setTimeout(() => {
            copyButton.textContent = 'copy';
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy password:', err);
          // Handle copy failure gracefully (e.g., display an error message)
        });
      return;
    }
}