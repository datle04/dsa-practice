function checkInclusion(s1: string, s2: string): boolean {
    let map = new Map();
    for(const char of s1){
        if(map.has(char)){
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    let matched = 0;

    for(let right = 0; right < s2.length; right++){
        if(map.has(s2[right])){
            map.set(s2[right], map.get(s2[right]) - 1);
            if(map.get(s2[right]) === 0) matched += 1;
        } 
       
       if(right >= s1.length){
            const left = s2[right - s1.length];
            if(map.has(left)){
                if(map.get(left) === 0) matched--;
                map.set(left,  map.get(left) + 1);
            }
        }

        if (matched === map.size) return true;
    }

    return false;
};