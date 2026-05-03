function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    let res = [];

    for(let i = 0; i < nums.length; i++){
        if(i> 0 && nums[i] === nums[i - 1]) continue;
        let target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        while(left < right){
            if(nums[left] + nums[right] === target){
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while(left < right && nums[left] === nums[left - 1]) left++;
                while(left < right && nums[right] === nums[right + 1]) right--;

            } else if (nums[left] + nums[right] > target){
                right--;
            } else {
                left++;
            }
        }
    }

    return res;
};