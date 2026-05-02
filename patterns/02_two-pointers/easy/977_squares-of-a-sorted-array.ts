function sortedSquares(nums: number[]): number[] {
    let left = 0;
    let right = nums.length - 1;

    let res = new Array(nums.length);
    let pos = res.length - 1;

    while(left <= right){
        let numLeft = nums[left] * nums[left];
        let numRight = nums[right] * nums[right];
        
        if(numLeft <= numRight){
            res[pos] = numRight;
            right--;
        } else {
            res[pos] = numLeft;
            left++;
        }

        pos--;
    }

    return res;
};