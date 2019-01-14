import {calculateZodiacSign} from "../js/lib.js";

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 1;
    const month = '1';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Козерог');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 25;
    const month = '1';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Водолей');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 1;
    const month = '2';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Водолей');

});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 25;
    const month = '2';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Рыбы');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 1;
    const month = '3';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Рыбы');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 25;
    const month = '3';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Овен');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 1;
    const month = '4';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Овен');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 25;
    const month = '4';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Телец');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 1;
    const month = '5';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Телец');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 25;
    const month = '5';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Близнецы');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 1;
    const month = '6';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Близнецы');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 25;
    const month = '6';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Рак');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 1;
    const month = '7';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Рак');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 25;
    const month = '7';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Лев');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 1;
    const month = '8';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Лев');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 25;
    const month = '8';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Дева');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 1;
    const month = '9';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Дева');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 25;
    const month = '9';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Весы');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 1;
    const month = '10';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Весы');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 25;
    const month = '10';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Скорпион');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 1;
    const month = '11';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Скорпион');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 25;
    const month = '11';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Стрелец');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 1;
    const month = '12';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Стрелец');
});

test('Чтобы узнать знак зодиака введите ', () => {
    const day = 25;
    const month = '12';
    const result = calculateZodiacSign(day, month);
    expect(result).toBe('Козерог');
});