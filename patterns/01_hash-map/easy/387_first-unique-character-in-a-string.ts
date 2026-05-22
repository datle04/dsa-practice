function firstUniqChar(s: string): number {
    let map = new Map();
    let res = null;

    for(const char of s){
        if(map.has(char)){
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    for(let i = 0; i < s.length; i ++){
        if(map.get(s[i]) === 1) return i;
    }
    
    return -1;
};