function isMonotonic(nums: number[]): boolean {
    let isIncreasing = true;
    let isDecreasing = true;

    for(let i = 0; i < nums.length; i++){
        if (nums[i] < nums[i - 1]){
            isIncreasing = false;
            break;
        }
    }

    for(let i = 0; i < nums.length; i++){
        if (nums[i] > nums[i - 1]){
            isDecreasing = false;
            break;
        }
    }

    return (isIncreasing || isDecreasing)
};