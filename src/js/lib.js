export function calculateZodiacSign(day, month) {
    let zodiacSign = '';
    const zodiacSigns = ['Козерог', 'Водолей', 'Рыбы', 'Овен',
        'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион',
        'Стрелец'];

        switch (month) {
            case '1': {
                if (day < 21) {
                    zodiacSign = zodiacSigns[0];
                } else {
                    zodiacSign = zodiacSigns[1];
                }
            }
                break;

            case '2': {
                if (day < 19) {
                    zodiacSign = zodiacSigns[1];
                } else {
                    zodiacSign = zodiacSigns[2];
                }
            }
                break;

            case '3': {
                if (day < 21) {
                    zodiacSign = zodiacSigns[2];
                } else {
                    zodiacSign = zodiacSigns[3];
                }
            }
                break;

            case '4': {
                if (day < 20) {
                    zodiacSign = zodiacSigns[3];
                } else {
                    zodiacSign = zodiacSigns[4];
                }
            }
                break;

            case '5': {
                if (day < 21) {
                    zodiacSign = zodiacSigns[4];
                } else {
                    zodiacSign = zodiacSigns[5];
                }
            }
                break;

            case '6': {
                if (day < 21) {
                    zodiacSign = zodiacSigns[5];
                } else {
                    zodiacSign = zodiacSigns[6];
                }
            }
                break;

            case '7': {
                if (day < 23) {
                    zodiacSign = zodiacSigns[6];
                } else {
                    zodiacSign = zodiacSigns[7];
                }
            }
                break;

            case '8': {
                if (day < 23) {
                    zodiacSign = zodiacSigns[7];
                } else {
                    zodiacSign = zodiacSigns[8];
                }
            }
                break;

            case '9': {
                if (day < 23) {
                    zodiacSign = zodiacSigns[8];
                } else {
                    zodiacSign = zodiacSigns[9];
                }
            }
                break;

            case '10': {
                if (day < 23) {
                    zodiacSign = zodiacSigns[9];
                } else {
                    zodiacSign = zodiacSigns[10];
                }
            }
                break;

            case '11': {
                if (day < 22) {
                    zodiacSign = zodiacSigns[10];
                } else {
                    zodiacSign = zodiacSigns[11];
                }
            }
                break;

            case '12': {
                if (day < 22) {
                    zodiacSign = zodiacSigns[11];
                } else {
                    zodiacSign = zodiacSigns[0];
                }
            }
                break;
        }
        return zodiacSign;
}