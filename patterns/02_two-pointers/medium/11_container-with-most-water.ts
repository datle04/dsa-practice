function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while(left < right){
        let w = right - left;
        let h = Math.min(height[left], height[right]);

        let area = w * h;
        max = Math.max(max, area);

        if(height[left] >= height[right]){
            right--;
        } else {
            left++;
        }
    };

    return max;
};