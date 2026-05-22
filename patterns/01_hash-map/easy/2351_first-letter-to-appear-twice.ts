function repeatedCharacter(s: string): string {
    let map = new Map();
    
    for(const char of s){
        if(!map.has(char)){
            map.set(char, 1)
        } else {
            if(map.get(char) === 1) return char;
            map.set(char, map.get(char) + 1);
        }
    }
};