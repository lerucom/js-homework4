import {calculateZodiacSign} from "./lib.js";

const dayOfBirthEl = document.getElementById('day-of-birth');
const monthOfBirthEl = document.getElementById('month-of-birth');
const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result');

function reactToClick() {
    const dayOfBirth = parseInt(dayOfBirthEl.value);
    const monthOfBirth = parseInt(monthOfBirthEl.value);
    resultEl.textContent = calculateZodiacSign(dayOfBirth, monthOfBirth);
}

calculateEl.addEventListener('click', reactToClick);