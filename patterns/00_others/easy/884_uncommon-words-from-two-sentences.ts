function uncommonFromSentences(s1: string, s2: string): string[] {
    let arr1 = s1.split(' ');
    let arr2 = s2.split(' ');
    let map1 = new Map();
    let map2 = new Map();
    let res = [];

    for(const word of arr1){
        if(map1.has(word)){
            map1.set(word, map1.get(word) + 1)
        } else {
            map1.set(word, 1);
        }
    }

    for(const word of arr2){
        if(map2.has(word)){
            map2.set(word, map2.get(word) + 1)
        } else {
            map2.set(word, 1);
        }
    }

    for(const word of arr1){
        if(!map2.has(word) && map1.get(word) === 1) res.push(word);
    }

    for(const word of arr2){
        if(!map1.has(word) && map2.get(word) === 1) res.push(word);
    }

    return res;
};