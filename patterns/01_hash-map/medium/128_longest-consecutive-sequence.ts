function longestConsecutive(nums: number[]): number {
    let set = new Set(nums);
    let max = 0;

    for(const num of set){
        if(!set.has(num - 1)){
            let temp = num + 1;
            let length = 1;
            while(set.has(temp)){
                temp++;
                length++;
            }
            max = Math.max(max, length)
        }
    }

    return max;
};