function twoSum(nums: number[], target: number): number[] | undefined {
    let map = new Map<number, number>();
    for(let i = 0; i < nums.length; i++){
        let completion: number = target - nums[i];
        if(map.has(completion)){
            return [map.get(completion) as number, i]
        } else {
            map.set(nums[i], i);
        }
    }
};