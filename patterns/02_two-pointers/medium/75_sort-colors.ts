/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let num0 = 0;
    let num1 = 0;
    let num2 = 0;

    for(const num of nums){
        if(num === 0){
            num0++;
        } else if (num === 1){
            num1++;
        } else {
            num2++;
        }
    }

    for(let i = 0; i < nums.length; i++){
        if(num0 > 0){
            nums[i] = 0;
            num0--;
        } else if(num1 > 0){
            nums[i] = 1;
            num1--;
        } else {
            nums[i] = 2;
            num2--;
        }
    }
};