class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        /* 
            We need to look for the smallest number and then 
            look for the greater number after the index of the 
            smalles number.

            And if there's not any gain in the future then we
            shoulnd't make any transation.
        */

        // Look for the smallest number from left to right 
        //let smallest = {value: Infinity, index: null};
        //for (let i = 0; i < prices.length; i++) {
        //    if (prices[i] < smallest.value) {
        //        smallest.value = prices[i]; 
        //        smallest.index = i;
        //    }
        //}

        // Look for any greater number than the smallest number
        // starting from the index of the smallest number
        //let greatest = -Infinity
        //for (let i = smallest.index; i < prices.length; i++) {
        //    if (prices[i] > greatest && prices[i] > smallest.value) greatest = prices[i];
        //}

        // if there wasn't any greater number return 0
        //return greatest === -Infinity ? 0 : greatest - smallest.value;


        /* 
            The first approach didn't work because looked like a 
            different exercise but instead we need to find the 
            most difference between two numbers in an array
            to do this there are two constraints and it is that 
            if the current number is not the smallest number should 
            be before the greatest number and if there is not 
            a gretest number after the smallest number then we 
            should return 0
        */

        // I'm going to try to solve it using two pointers 
        
        let left = 0;
        let right = 1;
        let maxLen = prices.length;
        let maxValue = 0;

        while (right < maxLen) {
            if (prices[left] < prices[right]) {
                maxValue = Math.max(prices[right] - prices[left], maxValue);
            } else {
                left = right;
            }
            right++
        }

        return maxValue;
    }
}
