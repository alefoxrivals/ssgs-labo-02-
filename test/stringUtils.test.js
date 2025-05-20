const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
} = require('../src/stringUtils');

describe('reverseString', () => {
    test('inverte una stringa normale', () => {
        expect(reverseString('ciao')).toBe('oaic');
    });

    test('inverte una stringa vuota', () => {
        expect(reverseString('')).toBe('');
    });

    test('inverte una stringa con spazi e simboli', () => {
        expect(reverseString('a b!')).toBe('!b a');
    });
});

describe('isPalindrome', () => {
    test('riconosce un palindromo semplice', () => {
        expect(isPalindrome('anna')).toBe(true);
    });

    test('riconosce un palindromo con maiuscole e spazi', () => {
        expect(isPalindrome('I topi non avevano nipoti')).toBe(true);
    });

    test('riconosce una stringa non palindroma', () => {
        expect(isPalindrome('ciao')).toBe(false);
    });

    test('gestisce una stringa vuota come palindroma', () => {
        expect(isPalindrome('')).toBe(true);
    });

    test('ignora spazi multipli', () => {
        expect(isPalindrome('a   b   a')).toBe(true);
    });

    test('ignora differenze di maiuscole', () => {
        expect(isPalindrome('AbBa')).toBe(true);
    });
});

describe('truncateString', () => {
    test('restituisce la stringa intera se <= maxLength', () => {
        expect(truncateString('ciao', 4)).toBe('ciao');
        expect(truncateString('hi', 5)).toBe('hi');
    });

    test('gestisce maxLength 0', () => {
        expect(truncateString('test', 0)).toBe('...');
    });
});

describe('countCharacters', () => {
    test('conta correttamente i caratteri in una stringa semplice', () => {
        expect(countCharacters('ciao')).toEqual({ c: 1, i: 1, a: 1, o: 1 });
    });

    test('gestisce caratteri ripetuti', () => {
        expect(countCharacters('aabb')).toEqual({ a: 2, b: 2 });
    });

    test('gestisce stringa vuota', () => {
        expect(countCharacters('')).toEqual({});
    });

    test('distingue maiuscole da minuscole', () => {
        expect(countCharacters('Aa')).toEqual({ A: 1, a: 1 });
    });
});
