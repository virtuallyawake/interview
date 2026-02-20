// https://leetcode.com/problems/valid-word-abbreviation
/*
A string can be abbreviated by replacing any number of non-adjacent, non-empty substrings with their lengths. The lengths should not have leading zeros.

For example, a string such as "substitution" could be abbreviated as (but not limited to):

"s10n" ("s ubstitutio n")
"sub4u4" ("sub stit u tion")
"12" ("substitution")
"su3i1u2on" ("su bst i t u ti on")
"substitution" (no substrings replaced)
The following are not valid abbreviations:

"s55n" ("s ubsti tutio n", the replaced substrings are adjacent)
"s010n" (has leading zeros)
"s0ubstitution" (replaces an empty substring)
Given a string word and an abbreviation abbr, return whether the string matches the given abbreviation.

A substring is a contiguous non-empty sequence of characters within a string.
*/


/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
 // "substitution"
 // "s10n" ==> s**********n

function isDigit(char) {
    const digits = "0123456789"
    return digits.indexOf(char) !== -1
}

/*
* keep two pointers
* when I find a number in the abbr, skip forward in word and abbr
* If char is not a digit, compare characters. If they don't match, return false
* If number starts with 0, return false
* If length of word is different than expanded abbr, return false
*/
var validWordAbbreviation = function(word, abbr) {
    let i = 0
    let j = 0
    console.log('--------------')
    console.log('WORD: ', word, ", ABBR: ", abbr)
    const w = word.split('')
    const a = abbr.split('')
    while (i < word.length && j < abbr.length) {
        let ci = w[i]
        let cj = a[j]

        if (cj === '0') {
            return false
        }

        if (isDigit(cj)) {
            let numStr = ''
            while (true) {
                let c = a[j]
                if (!isDigit(c)) {
                    break
                }
                numStr += c
                j++
            }
            const num = parseInt(numStr)
            i += num
            continue
        }
        if (ci !== cj) {
            return false
        }
        i++
        j++
    }

    if (i !== word.length || j !== abbr.length) {
        return false
    }

    return true
};

