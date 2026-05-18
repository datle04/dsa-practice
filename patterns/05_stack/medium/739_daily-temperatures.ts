function dailyTemperatures(temperatures: number[]): number[] {
    let stack = [];

    let res = new Array(temperatures.length).fill(0);
    
    for(let i = 0; i < temperatures.length; i++){
        while(temperatures[i] > temperatures[stack[stack.length - 1]]){
            let idx = stack.pop()!;
            res[idx] = i - idx;
        }
        
        stack.push(i);
    }

    return res;
};