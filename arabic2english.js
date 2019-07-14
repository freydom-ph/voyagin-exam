/*
 * I've thought of a better way to do this assignment.
 *
 * My original though was to iterate through each of the number and
 * determine if it's a ones, tens, hundreds, etc.
 * But as I was trying it out, the conditions were getting more and more
 * complicated so I had to stop and think of a different solution.
 *
 * Looking at this problem, we can say that there's a pattern:
 * For example: 123,456,789
 *
 * In this we can "group" together numbers "123", "456", and "789"
 * Given this scenario, we can say that:
 *
 * The first group is a "hundreds"
 * The second group is a "thousands" with a possibility of a "hundreds"
 * The third group is the "millions" and also with a possibility of "hundreds"
 *
 * Given that fact, we can say that "hundreds" should be made available to all "groups"
 * and after that, we can label them with "thousand", "million", "billion", etc
 *
 * Also, by grouping the numbers together, we can shorten the iteration
 */


const getEnglishValue = (param = process.argv[2]) => {
    let englishValue = '';
    param = param.split('').reverse().join('');

    for (let i = 0; i < Math.ceil(param.length / 3); i ++) {
        let tempValue = '';
        const group = param.substr(i * 3, 3);
        const firstNumber = parseInt(group[0]);
        // We have to set a default value of 0 to second and third numbers
        // for scenarios like a single digit number where the parsed value is NaN
        const secondNumber = parseInt(group[1] || '0');
        const thirdNumber = parseInt(group[2] || '0');
        const firstTwoNumbers = parseInt(`${secondNumber}${firstNumber}`);

        // Check if single number (1 to 9)
        if (firstTwoNumbers < 10) {
            tempValue = `${getSingleDigitValue(firstNumber)} ${tempValue}`;
        } else if (firstTwoNumbers >= 10 && firstTwoNumbers < 20) {
            tempValue = `${getTenToNineteen(firstTwoNumbers)} ${tempValue}`;
        } else if (firstTwoNumbers >= 20) {
            tempValue = `${getTens(secondNumber)} ${getSingleDigitValue(firstNumber) || ''}`;
        }

        if (thirdNumber > 0) {
            tempValue = `${getSingleDigitValue(thirdNumber)} hundred ${tempValue}`;
        }

        englishValue = `${tempValue} ${getExtension(i)}`;

    }

    console.log(englishValue.replace(/[\s]+/g, ' ').trim());
    return englishValue.replace(/\s{2}/g, ' ').trim();
};

const getSingleDigitValue = number => {
    switch(number) {
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        default: return '';
    }
};

const getTenToNineteen = number => {
    switch(number) {
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
        default: return '';
    }
};

const getTens = number => {
    switch(number) {
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';
        default: return '';
    }
};

const getExtension = position => {
    switch(position) {
        case 1: return 'thousand';
        case 2: return 'million';
        case 3: return 'billion';
        default: return '';
    }
};

module.exports.getEnglishValue = getEnglishValue;
module.exports.init = getEnglishValue();