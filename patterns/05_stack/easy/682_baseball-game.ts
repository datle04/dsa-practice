function calPoints(operations: string[]): number {
    let stack = [];

    for(const el of operations){
        if(el === "+"){
            let val1: number = Number(stack[stack.length - 1]);
            let val2: number = Number(stack[stack.length - 2]);
            let sum = val1 + val2;
            stack.push(sum);
        } else if (el === "C"){
            stack.pop();
        } else if (el === "D"){
            let val: number = Number(stack[stack.length - 1]);
            let temp = val*2;
            stack.push(temp);
        } else {
            stack.push(el);
        }
    }

    let res = 0;
    for (const val of stack){
        res+= Number(val);
    }

    return res;
};