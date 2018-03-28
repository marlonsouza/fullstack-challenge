var palindrome = (word) => {
    var regExp = /[^a-z0-9]/gmi;
    var wordReverse = word.replace(regExp, '').split('').reverse().join('');
    return word.replace(regExp, '').toLowerCase() == wordReverse.toLowerCase();
};

module.exports = palindrome;


