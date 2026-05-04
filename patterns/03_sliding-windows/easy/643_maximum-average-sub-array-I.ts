function findMaxAverage(nums: number[], k: number): number {
    let sum = 0;
    let res = -Infinity;

    for(let right = 0; right < nums.length; right++){
        sum += nums[right]
        if(right >= k) sum -= nums[right - k];
        if(right >= k - 1) res = Math.max(res, sum / k);
    }

    return res;
};