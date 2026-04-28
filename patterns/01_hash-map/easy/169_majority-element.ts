function majorityElement(nums: number[]): number {
    let freq = new Map<number, number>();
    let majority = 0;
    let max = 0;

    for (const num of nums){
        if(freq.has(num)){
            freq.set(num, freq.get(num)! + 1);
        } else {
            freq.set(num, 1);
        }
    }

    for (const [key, val] of freq){
        if(val > max){
            majority = key;
            max = val;
        } 
    }

    return majority;
};