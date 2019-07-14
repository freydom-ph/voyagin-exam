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
    let oneToNineteen = ['one', "two", 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let extensions = ['thousand', 'million', 'billion', 'trillion'];

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

        if (firstTwoNumbers > 0 && firstTwoNumbers < 20) {
            tempValue = `${oneToNineteen[firstTwoNumbers - 1]}`;
        } else if (firstTwoNumbers >= 20) {
            tempValue = `${tens[secondNumber - 2]} ${oneToNineteen[firstNumber - 1] || ''}`;
        }

        if (thirdNumber > 0) {
            tempValue = `${oneToNineteen[thirdNumber - 1]} hundred ${tempValue}`;
        }

        englishValue = `${tempValue} ${tempValue.trim() ? extensions[i - 1] || '' : ''} ${englishValue}`;
    }

    console.log(englishValue.replace(/[\s]+/g, ' ').trim());
    return englishValue.replace(/[\s]+/g, ' ').trim();
};

module.exports.getEnglishValue = getEnglishValue;
module.exports.init = getEnglishValue();