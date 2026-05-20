function largestRectangleArea(heights: number[]): number {
    let stack: number[] = [];
    let maxArea = 0;
    heights.push(0);

    for(let i = 0; i < heights.length; i++){
        while(heights[i] < heights[stack[stack.length - 1]]){
            let idx = stack.pop()!;
            let h = heights[idx];
            let w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;    
            maxArea = Math.max(maxArea, w*h);
        };

        stack.push(i)
    };

    return maxArea;
};