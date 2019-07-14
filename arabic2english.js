const getEnglishValue = (param = process.argv[2]) => {
    let englishValue = '';
    param = param.split('').reverse().join('');

    // Check for non-number entries???
    for (let iter = 0; iter < param.length; iter++) {
        // Counter should reset after 3 counts to separate hundreds, thousands, millions, etc.
        let counter = 1;
        const currentNumber = parseInt(param.charAt(iter));
        const prevNumber = parseInt(param.charAt(iter - 1));
        const nextNumber = parseInt(param.charAt(iter + 1));

        let numberToCheck = parseInt(`${nextNumber}${currentNumber}`);

        // If two digit number
        if (nextNumber <= 1 && counter < 2) {
            if (nextNumber < 2) {
                englishValue = `${getTenToNineteen(numberToCheck)} ${englishValue}`;
            } else {
                englishValue = `${getTens(nextNumber)} ${getSingleDigitValue(currentNumber)} ${englishValue}`;
            }
            iter++;
            counter++;
        } else {
            // Single digit number
            // Hundreds should also be placed here
            englishValue = `${getSingleDigitValue(currentNumber)} ${(iter + 1) % 3 === 0 ?  'hundred' : ''} ${englishValue}`;
        }

        counter++;
        if (counter === 4) {
            counter = 1;
        }
    }

    // Remove all extra spaces
    console.log(englishValue.replace(/\s{2}/g, ' ').trim());
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

module.exports.getEnglishValue = getEnglishValue;
module.exports.init = getEnglishValue();