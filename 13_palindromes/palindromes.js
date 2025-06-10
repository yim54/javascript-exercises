const palindromes = function (word) {
    // string preprocessing

    word = word.toLowerCase();
    word = word.replaceAll(" ", "");

    let i = 0;
    let j = word.length - 1;
    while (j > i) {
        // check for alphanumeric

        let regex = /^[a-zA-Z0-9]+$/;
        if (!regex.test(word[i])) {
            i++;
        }

        if (!regex.test(word[j])) {
            j--;
        }

        console.log(word[i]+ word[j]);
        if (word[i] != word[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
