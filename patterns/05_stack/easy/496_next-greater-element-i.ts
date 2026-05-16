function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let stack = [];
    let map = new Map();

    for(let i = nums2.length - 1; i >= 0; i--){
        while(stack[stack.length - 1] <= nums2[i]){
            stack.pop();
        }
        if(stack.length === 0){
            map.set(nums2[i], -1);
        } else {
            map.set(nums2[i], stack[stack.length - 1])
        }
        stack.push(nums2[i]);
    };

    for(let i = 0; i < nums1.length; i++){
        nums1[i] = map.get(nums1[i]);
    }

    return nums1;
};