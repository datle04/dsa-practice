function numJewelsInStones(jewels: string, stones: string): number {
    let map = new Map();
    for(const jewel of jewels){
        if(!map.has(jewel)){
            map.set(jewel, 0);
        }
    }

    for(const stone of stones){
        if(map.has(stone)){
            map.set(stone, map.get(stone) + 1);
        }
    } 

    let res = 0;
    for(const [key, val] of map){
        res+= val;
    }

    return res;
};