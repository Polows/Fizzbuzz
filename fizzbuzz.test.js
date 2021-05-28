const fizzbuzz = require('./fizzbuzz');

describe("fizzbuz", () => {
    test("sholud print and error message", () => {
        const expected = "Error";
        const result = fizzbuzz("16");
        expect(expected).toBe(result);
    });


    test("sholud print 1 if they receive 1", () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);
    });

    test("sholud print fizz if they receive 3", () => {
        const expected = 'fizz';
        const result = fizzbuzz(3);
        expect(expected).toBe(result);
    });

    test("sholud print fizz if they receive multiple of 3", () => {
        const expected = 'fizz';
        const result = fizzbuzz(6);
        expect(expected).toBe(result);
    });

    test("sholud print buzz if they receive 5", () => {
        const expected = 'buzz';
        const result = fizzbuzz(5);
        expect(expected).toBe(result);
    });

    test("sholud print buzz if they receive multiple of 5", () => {
        const expected = 'buzz';
        const result = fizzbuzz(10);
        expect(expected).toBe(result);
    });

    test("sholud print fizzbuzz if they receive multiple of 3 and 5", () => {
        const expected = 'fizzbuzz';
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    });

});