import {calculateZodiacSign} from "../js/lib.js";

test.each([[1, 1, 'Козерог'], [25, 12, 'Козерог'], [25, 1, 'Водолей']])(
    'should actual day %i, month %i, zodiac is %s',
    (day, month, expected) => {
        const actual = calculateZodiacSign(day, month);
        expect(actual).toBe(expected);
    }
);

// test('If day = 1 and month = 1 then result = \'Козерог\'', () => {
//     const day = 1;
//     const month = '1';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Козерог');
// });
//
// test('If day = 25 and month = 1 then result = \'Водолей\'', () => {
//     const day = 25;
//     const month = '1';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Водолей');
// });
//
// test('If day = 1 and month = 2 then result = \'Водолей\'', () => {
//     const day = 1;
//     const month = '2';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Водолей');
//
// });
//
// test('If day = 25 and month = 2 then result = \'Рыбы\'', () => {
//     const day = 25;
//     const month = '2';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Рыбы');
// });
//
// test('If day = 1 and month = 3 then result = \'Рыбы\'', () => {
//     const day = 1;
//     const month = '3';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Рыбы');
// });
//
// test('If day = 25 and month = 3 then result = \'Овен\'', () => {
//     const day = 25;
//     const month = '3';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Овен');
// });
//
// test('If day = 1 and month = 4 then result = \'Овен\'', () => {
//     const day = 1;
//     const month = '4';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Овен');
// });
//
// test('If day = 25 and month = 4 then result = \'Телец\'', () => {
//     const day = 25;
//     const month = '4';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Телец');
// });
//
// test('If day = 1 and month = 5 then result = \'Телец\'', () => {
//     const day = 1;
//     const month = '5';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Телец');
// });
//
// test('If day = 25 and month = 5 then result = \'Близнецы\'', () => {
//     const day = 25;
//     const month = '5';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Близнецы');
// });
//
// test('If day = 1 and month = 6 then result = \'Близнецы\'', () => {
//     const day = 1;
//     const month = '6';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Близнецы');
// });
//
// test('If day = 25 and month = 6 then result = \'Рак\'', () => {
//     const day = 25;
//     const month = '6';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Рак');
// });
//
// test('If day = 1 and month = 7 then result = \'Рак\'', () => {
//     const day = 1;
//     const month = '7';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Рак');
// });
//
// test('If day = 25 and month = 7 then result = \'Лев\'', () => {
//     const day = 25;
//     const month = '7';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Лев');
// });
//
// test('If day = 1 and month = 8 then result = \'Лев\'', () => {
//     const day = 1;
//     const month = '8';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Лев');
// });
//
// test('If day = 25 and month = 8 then result = \'Дева\'', () => {
//     const day = 25;
//     const month = '8';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Дева');
// });
//
// test('If day = 1 and month = 9 then result = \'Дева\'', () => {
//     const day = 1;
//     const month = '9';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Дева');
// });
//
// test('If day = 25 and month = 9 then result = \'Весы\'', () => {
//     const day = 25;
//     const month = '9';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Весы');
// });
//
// test('If day = 1 and month = 10 then result = \'Весы\'', () => {
//     const day = 1;
//     const month = '10';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Весы');
// });
//
// test('If day = 25 and month = 10 then result = \'Скорпион\'', () => {
//     const day = 25;
//     const month = '10';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Скорпион');
// });
//
// test('If day = 1 and month = 11 then result = \'Скорпион\'', () => {
//     const day = 1;
//     const month = '11';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Скорпион');
// });
//
// test('If day = 25 and month = 11 then result = \'Стрелец\'', () => {
//     const day = 25;
//     const month = '11';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Стрелец');
// });
//
// test('If day = 1 and month = 12 then result = \'Стрелец\'', () => {
//     const day = 1;
//     const month = '12';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Стрелец');
// });
//
// test('If day = 25 and month = 12 then result = \'Козерог\'', () => {
//     const day = 25;
//     const month = '12';
//     const result = calculateZodiacSign(day, month);
//     expect(result).toBe('Козерог');
// });