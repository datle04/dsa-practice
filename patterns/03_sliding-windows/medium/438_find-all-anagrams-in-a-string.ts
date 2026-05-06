function findAnagrams(s: string, p: string): number[] {
    let map = new Map();
    
    for(const char of p){
        if(map.has(char)){
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    let matched = 0;
    let res = [];
    for(let right = 0; right < s.length; right ++){
        if(map.has(s[right])){
            map.set(s[right], map.get(s[right]) - 1);
            if(map.get(s[right]) >= 0) matched++;
        }

        if(right >= p.length){
            let left = right - p.length;
            if(map.has(s[left])){
                map.set(s[left], map.get(s[left]) + 1);
                if(map.get(s[left]) > 0) matched--;
            }
        }

        if(matched === p.length){
            res.push(right - p.length + 1);
        }
    }

    return res;
};