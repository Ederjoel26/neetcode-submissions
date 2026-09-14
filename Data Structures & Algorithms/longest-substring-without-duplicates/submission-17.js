class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let longest = 0;
        const charMap = new Map();
    
        for (let right = 0; right < s.length; right++) {
            const c = s[right];
    
            if (charMap.has(c) && charMap.get(c) >= left) {
                left = charMap.get(c) + 1;
            }
    
            charMap.set(c, right);
            longest = Math.max(longest, right - left + 1);
        }
    
        return longest;
    }
}
