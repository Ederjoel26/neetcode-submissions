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
    
            // If character exists and its last position is inside our current window
            if (charMap.has(c) && charMap.get(c) >= left) {
                // Jump left pointer directly past the previous occurrence
                left = charMap.get(c) + 1;
            }
    
            // Update the character's latest index and calculate max length
            charMap.set(c, right);
            longest = Math.max(longest, right - left + 1);
        }
    
        return longest;
    }
}
