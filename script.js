let inputSlider = document.querySelector("#input-slider");
let passLength = document.querySelector("#char-leng");
let lowerCase = document.querySelector("#lowercase");
let upperCase = document.querySelector("#uppercase");
let numbers = document.querySelector("#numbers");
let symbol = document.querySelector("#symbol");
let genbtn = document.querySelector("button");
let passScreen = document.querySelector("#pass-box");
let copy = document.querySelector("#icon");

passLength.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    passLength.textContent = inputSlider.value;
});

genbtn.addEventListener("click", () => {
    passScreen.value = generatePassword();
});

let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*()";

function generatePassword() {
    let genPassword = "";
    let allChars = "";
    allChars += lowerCase.checked ? lowerChar : "";
    allChars += upperCase.checked ? upperChar : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbol.checked ? allSymbols : "";

    if (allChars == "" || allChars == 0) {
        return genPassword;
    }
    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword;
}

copy.addEventListener("click", () => {
    if (passScreen.value != "" || passScreen.value >= 8) {
        navigator.clipboard.writeText(passScreen.value);
        copy.title = "Password Copied";
        copy.innerHTML = "check";
        setTimeout(() => {
            copy.title = "";
            copy.innerHTML = "content_copy";
        }, 800);
    }
})