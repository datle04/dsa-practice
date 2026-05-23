function subarraySum(nums: number[], k: number): number {
    let sum = 0;
    let map = new Map([
        [0, 1],
    ])
    let res = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        let temp = sum - k;
        if(map.has(temp)){
            res += map.get(temp)!
        }
        
        map.set(sum, (map.get(sum) ?? 0) + 1)
    }

    return res;
};