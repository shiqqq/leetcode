
/**
 * 5-最长回文子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    //
    if (s.length < 2) {
        return s;
    }

    let start = 0;
    let maxLen = 1;
    
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            let currLen = right - left + 1;
            if (currLen > maxLen) {
                maxLen = currLen;
                start = left;
            }
            left--;
            right++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i - 1, i + 1);
        expandAroundCenter(i, i + 1);
    }
    //
    return s.substr(start, maxLen);
 
    
    

};

longestPalindrome("abbacc");