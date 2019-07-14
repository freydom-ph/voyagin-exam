const getEnglishValue = (param = process.argv[2]) => {
    let englishValue = '';

    // Check for non-number entries???
    for (let iter = 0; iter < param.length; iter ++) {
        // Reverse the number and evaluate
        const currentNumber = param.charAt(iter);
        const prevNumber = param.charAt(iter - 1);
        const nextNumber = param.charAt(iter + 1);

        // If two digit number
        if (nextNumber.length > 0) {
            englishValue = `${getTenToNineteen(`${currentNumber}${nextNumber}`)}`;
            iter ++;
        } else {
            // Single digit number
            englishValue = `${getSingleDigitValue(currentNumber)} ${englishValue}`;
        }
    }

    return englishValue.trim();
};

const getSingleDigitValue = number => {
    switch(number) {
        case '1': return 'one';
        case '2': return 'two';
        case '3': return 'three';
        case '4': return 'four';
        case '5': return 'five';
        case '6': return 'six';
        case '7': return 'seven';
        case '8': return 'eight';
        case '9': return 'nine';
        default: return '';
    }
};

const getTenToNineteen = number => {
    switch(number) {
        case '10': return 'ten';
        case '11': return 'eleven';
        case '12': return 'twelve';
        case '13': return 'thirteen';
        case '14': return 'fourteen';
        case '15': return 'fifteen';
        case '16': return 'sixteen';
        case '17': return 'seventeen';
        case '18': return 'eighteen';
        case '19': return 'nineteen';
        default: return '';
    }
};

module.exports.getEnglishValue = getEnglishValue;
module.exports.init = getEnglishValue();