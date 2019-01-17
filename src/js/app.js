import {calculateZodiacSign} from "./lib.js";

const dayOfBirthEl = document.getElementById('day-of-birth');
const monthOfBirthEl = document.getElementById('month-of-birth');
const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result');

function reactToClick() {
    const dayOfBirth = dayOfBirthEl.value;
    const monthOfBirth = monthOfBirthEl.value;
    if (dayOfBirth <= 31 && monthOfBirth <= 12) {
    resultEl.textContent = calculateZodiacSign(dayOfBirth, monthOfBirth);
}}

calculateEl.addEventListener('click', reactToClick);