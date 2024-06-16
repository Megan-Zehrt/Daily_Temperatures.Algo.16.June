// 739. Daily Temperatures


// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.




/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    let answer = new Array(temperatures.length).fill(0);

    for(let i = 0; i < temperatures.length; i++){
        let j = i + 1;
        while(j < temperatures.length && temperatures[j] <= temperatures[i]){
            j++;
        }
        if (j < temperatures.length) {
            answer[i] = j - i;
        }
    }

    return answer;
};






/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let answer = new Array(temperatures.length).fill(0);
    let stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }

    return answer;
};
