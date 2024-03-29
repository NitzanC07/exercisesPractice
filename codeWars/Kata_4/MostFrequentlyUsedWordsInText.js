/**
 * Write a function that, given a string of text (possibly with punctuation and line-breaks), 
 * returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
 * 
 * Assumptions:
 * A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
 * Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
 * Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
 * Matches should be case-insensitive, and the words in the result should be lowercased.
 * Ties may be broken arbitrarily.
 * If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, 
 * or an empty array if a text contains no words.
 * 
 * Examples:
 * top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e") => ["e", "ddd", "aa"]
 * top_3_words("  //wont won't won't") => ["won't", "wont"]
 */

function topThreeWords(text) {    
    const splitToLines = text.split("\n").map(line => line.split(" "));
    const splitToWords = splitToLines[0].concat(splitToLines[1]);
    const counterWords = {};
    splitToWords.forEach((word) => {
        if (word) {
            // console.log(word.toLowerCase());
            let keyWord = word.toLowerCase();
            keyWord = !(keyWord[keyWord.length -1].charCodeAt() >= 97 && keyWord[keyWord.length -1].charCodeAt() <= 122) ?
                keyWord.slice(0, keyWord.length -1) : 
                !(keyWord[0].charCodeAt() >= 97 && keyWord[0].charCodeAt() <= 122) ? 
                keyWord.slice(1) : keyWord;

            console.log(`${keyWord}`);

            if (Object.keys(counterWords).includes(keyWord)) {
                counterWords[keyWord] += 1;
            } else {
                counterWords[keyWord] = 1;
            }
        }
    });

    console.log(Math.max(...Object.values(counterWords)));

    return counterWords;
}

const result1 = topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e");
// const result2 = topThreeWords("  //wont won't won't");
// const result3 = topThreeWords(`Hello #world
// What is your name?`);
// const result4 = topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.`);

console.log(result1);
