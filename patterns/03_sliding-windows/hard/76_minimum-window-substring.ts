function minWindow(s: string, t: string): string {
    let map = new Map();
    let min = Infinity;
    let resLeft = 0;
    let resRight = 0;

    for(const char of t){
        if(map.has(char)){
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    let matched = 0;
    let left = 0;
    for(let right = 0; right < s.length; right++){
         if(map.has(s[right])){
            map.set(s[right], map.get(s[right]) - 1);
            if(map.get(s[right]) >= 0) matched++;
        }

        while(matched === t.length){
            if(right - left + 1 < min){
                min = right - left + 1;
                resLeft = left;
                resRight = right;
            }
            if(map.has(s[left])){
                map.set(s[left], map.get(s[left]) + 1);
                if(map.get(s[left]) > 0) matched--;
            }
            left++;
        };
    }

    return min === Infinity ? "" : s.slice(resLeft, resRight + 1);
};