function minSubArrayLen(target: number, nums: number[]): number {
    let res = Infinity;
    let sum = 0;
    let left = 0;

    for(let right = 0; right < nums.length; right++){
        sum += nums[right];
        while(sum >= target){
            res = Math.min(res, right - left + 1);
            sum -= nums[left];
            left++;
        }
    };

   return res === Infinity ? 0 : res
};