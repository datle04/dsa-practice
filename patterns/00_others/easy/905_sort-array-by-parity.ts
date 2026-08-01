function sortArrayByParity(nums: number[]): number[] {
    let left = 0;
    for(let right = 0; right < nums.length; right++){
        if(nums[right] % 2 === 0){
            let temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            left++;
        }
    }

    return nums;
};