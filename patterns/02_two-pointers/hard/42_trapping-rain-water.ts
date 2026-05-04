function trap(height: number[]): number {
   let left = 0;
   let right = height.length - 1;
   let maxLeft = 0;
   let maxRight = 0;
   let res = 0;

   while(left < right){
    if(height[left] <= height[right]){
        maxLeft = Math.max(maxLeft, height[left]);
        res += maxLeft - height[left];
        left++
    } else {
        maxRight = Math.max(maxRight, height[right]);
        res += maxRight - height[right];
        right--;
    }
   } 

   return res;
};