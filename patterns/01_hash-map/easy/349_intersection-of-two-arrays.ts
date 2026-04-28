function intersection(nums1: number[], nums2: number[]): number[] {
    let map = new Map<number, number>();
    let res = [];

    for (const num of nums1){
        if(map.has(num)){
            map.set(num, map.get(num)! + 1);
        } else {
            map.set(num, 1);
        }
    }

    for (const num of nums2){
        if(map.has(num)) res.push(num);
    }

    let mySet = new Set(res);
    
    return [...mySet];
};