class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let longest = 0;
        const charSet = new Set();
    
        for (let right = 0; right < s.length; right++) {
            // If the character is already in the set, shrink the window from the left
            while (charSet.has(s[right])) {
                charSet.delete(s[left]);
                left++;
            }
    
            // Add the new character and update the maximum length found so far
            charSet.add(s[right]);
            longest = Math.max(longest, right - left + 1);
        }
    
        return longest;
    }
}
