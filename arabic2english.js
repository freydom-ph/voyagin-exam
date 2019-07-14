const getEnglishValue = param => {
    let englishValue = '';

    // Check for non-number entries???
    for (let iter = 0; iter < param.length; iter ++) {
        const currentNumber = param.charAt(iter);
        englishValue = getSingleDigitValue(currentNumber);
    }

    return englishValue;
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

module.exports.getEnglishValue = getEnglishValue;