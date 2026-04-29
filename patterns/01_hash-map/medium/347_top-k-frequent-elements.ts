function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map<number, number>();

    for (const num of nums){
        if(map.has(num)){
            map.set(num, map.get(num)! + 1);
        } else {
            map.set(num, 1);
        }
    }

    let temp: number[][] = Array.from({ length: nums.length + 1 }, () => []);
    let res: number[] = [];

    for(const [key, val] of map){
        temp[val].push(key);
    }

    for(let i = temp.length - 1; i >=0; i--){
        if(temp[i].length !== 0) res.push(...temp[i]);
        if(res.length >= k) break;
    }

    return res;
};