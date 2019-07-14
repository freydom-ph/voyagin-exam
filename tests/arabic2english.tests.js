'use strict';

const arabic2Enlgish = require('../arabic2english');
const assert = require('assert');

describe('Tests the arabic2english module', () => {
    it('should return "one"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('1'), 'one');
    });

    it('should return "two"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('2'), 'two');
    });

    it('should return "three"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('3'), 'three');
    });

    it('should return "four"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('4'), 'four');
    });

    it('should return "five"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('5'), 'five');
    });

    it('should return "six"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('6'), 'six');
    });

    it('should return "seven"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('7'), 'seven');
    });

    it('should return "eight"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('8'), 'eight');
    });

    it('should return "nine', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('9'), 'nine');
    });

    it('should return "ten"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('10'), 'ten');
    });

    it('should return "eleven"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('11'), 'eleven');
    });

    it('should return "twelve"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('12'), 'twelve');
    });

    it('should return "thirteen"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('13'), 'thirteen');
    });

    it('should return "fourteen"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('14'), 'fourteen');
    });

    it('should return "fifteen"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('15'), 'fifteen');
    });

    it('should return "sixteen"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('16'), 'sixteen');
    });

    it('should return "seventeen"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('17'), 'seventeen');
    });

    it('should return "eighteen"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('18'), 'eighteen');
    });

    it('should return "nineteen"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('19'), 'nineteen');
    });

    it('should return "twenty"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('20'), 'twenty');
    });

    it('should return "twenty one"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('21'), 'twenty one');
    });

    it('should return "twenty two"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('22'), 'twenty two');
    });

    it('should return "twenty three"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('23'), 'twenty three');
    });

    it('should return "twenty four"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('24'), 'twenty four');
    });

    it('should return "twenty five"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('25'), 'twenty five');
    });

    it('should return "twenty six"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('26'), 'twenty six');
    });

    it('should return "twenty seven"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('27'), 'twenty seven');
    });

    it('should return "twenty eight"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('28'), 'twenty eight');
    });

    it('should return "twenty nine"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('29'), 'twenty nine');
    });

    it('should return "thirty"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('30'), 'thirty');
    });

    it('should return "forty"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('40'), 'forty');
    });

    it('should return "fifty"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('50'), 'fifty');
    });

    it('should return "sixty"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('60'), 'sixty');
    });

    it('should return "seventy"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('70'), 'seventy');
    });

    it('should return "eighty"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('80'), 'eighty');
    });

    it('should return "ninety"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('90'), 'ninety');
    });

    it('should return "one hundred"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('100'), 'one hundred');
    });

    it('should return "one hundred one"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('101'), 'one hundred one');
    });

    it('should return "one hundred eleven"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('111'), 'one hundred eleven');
    });

    it('should return "one hundred nineteen"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('119'), 'one hundred nineteen');
    });

    it('should return "one hundred twenty"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('120'), 'one hundred twenty');
    });

    it('should return "one hundred twenty nine"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('129'), 'one hundred twenty nine');
    });

    it('should return "one hundred fifty"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('150'), 'one hundred fifty');
    });

    it('should return "two hundred"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('200'), 'two hundred');
    });

    it('should return "two hundred ninety"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('290'), 'two hundred ninety');
    });

    it('should return "nine hundred"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('900'), 'nine hundred');
    });

    it('should return "nine hundred ninety nine"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('999'), 'nine hundred ninety nine');
    });

    it('should return "one thousand"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('1000'), 'one thousand');
    });

    it('should return "one thousand one"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('1001'), 'one thousand one');
    });

    it('should return "one thousand five hundred eleven"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('1511'), 'one thousand five hundred eleven');
    });

    it('should return "one thousand nine hundred sixty seven"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('1967'), 'one thousand nine hundred sixty seven');
    });

    it('should return "ten thousand"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('10000'), 'ten thousand');
    });

    it('should return "ten thousand nine hundred twenty"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('10920'), 'ten thousand nine hundred twenty');
    });

    it('should return "ten thousand"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('10000'), 'ten thousand');
    });

    it('should return "ninety five thousand"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('95000'), 'ninety five thousand');
    });

    it('should return "one hundred thousand"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('100000'), 'one hundred thousand');
    });

    it('should return "one hundred thousand twenty"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('100020'), 'one hundred thousand twenty');
    });

    it('should return "seven hundred thousand seven hundred seventy seven"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('700777'), 'seven hundred thousand seven hundred seventy seven');
    });

    it('should return "seven hundred seventy seven thousand seven hundred seventy seven"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('777777'), 'seven hundred seventy seven thousand seven hundred seventy seven');
    });

    it('should return "nine hundred thousand ninety"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('900090'), 'nine hundred thousand ninety');
    });

    it('should return "one million"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('1000000'), 'one million');
    });

    it('should return "one million one"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('1000001'), 'one million one');
    });

    it('should return "one million one hundred"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('1000100'), 'one million one hundred');
    });

    it('should return "one million one thousand"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('1001000'), 'one million one thousand');
    });

    it('should return "eleven million one hundred thousand eleven"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('11100011'), 'eleven million one hundred thousand eleven');
    });

    it('should return "fifty million fifty thousand fifty"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('50050050'), 'fifty million fifty thousand fifty');
    });

    it('should return "seven hundred million one hundred"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('700000100'), 'seven hundred million one hundred');
    });

    it('should return "one billion"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('1000000000'), 'one billion');
    });

    it('should return "one billion fifty thousand"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('1000050000'), 'one billion fifty thousand');
    });

    it('should return "one billion fifty thousand one"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('1000050001'), 'one billion fifty thousand one');
    });

    it('should return "one billion one"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('1000000001'), 'one billion one');
    });

    it('should return "sixty billion six hundred thousand"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('60000600000'), 'sixty billion six hundred thousand');
    });

    it('should return "one trillion"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('1000000000000'), 'one trillion');
    });

    it('should return "one trillion one"', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('1000000000001'), 'one trillion one');
    });
});