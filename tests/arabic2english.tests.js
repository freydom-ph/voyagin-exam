'use strict';

const arabic2Enlgish = require('../arabic2english');
const assert = require('assert');

describe('Tests the arabic2english module', () => {
    it('should return "one', () => {
        assert.strictEqual(arabic2Enlgish.getEnglishValue('1'), 'one');
    });
});