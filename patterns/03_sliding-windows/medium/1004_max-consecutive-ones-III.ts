function longestOnes(nums: number[], k: number): number {
    let left = 0;
    let res = 0;
    let zeroCount = 0;;

    for(let right = 0; right < nums.length; right++){
        if(nums[right] === 0) zeroCount++;
        while(zeroCount > k){
            if(nums[left] === 0) zeroCount--;
            left++;
        }
        res = Math.max(res, right - left + 1);
    }

    return res;
};