function findRestaurant(list1: string[], list2: string[]): string[] {
    let map = new Map<string, number>();
    let min = Infinity;
    let res = [];

    for(let i = 0; i < list1.length; i++){
        map.set(list1[i], i);
    }

    for(let i = 0; i < list2.length; i++){
        if(map.has(list2[i])){
            let index = map.get(list2[i]);
            const sum = index + i;

            if(sum < min){
                min = sum;
                res = [list2[i]];
            } else if (sum === min){
                res.push(list2[i]);
            }
        }
    }

    return res;
};