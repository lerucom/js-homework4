import {calculateZodiacSign} from "./lib.js";

const dayOfBirthEl = document.getElementById('dayOfBirth');
const monthOfBirthEl = document.getElementById('monthOfBirth');
const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result');

function reactToClick() {
    const dayOfBirth = parseInt(dayOfBirthEl.value);
    const monthOfBirth = monthOfBirthEl.value;
    resultEl.textContent = calculateZodiacSign(dayOfBirth, monthOfBirth);
}

calculateEl.addEventListener('click', reactToClick);