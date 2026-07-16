function shortestCompletingWord(licensePlate: string, words: string[]): string {
    let map = new Map<string, number>();

    for(const char of licensePlate){
        const c = char.toLowerCase();
        if(c >= "a" && c <= "z"){
            if(map.has(c)){
                map.set(c, map.get(c) + 1);
            } else {
                map.set(c, 1);
            }
        }
    }

    let res = "";
    
    for(let i = 0; i < words.length; i++){
        if(res && words[i].length >= res.length) continue;
        const cloned = new Map<string, number>(map);
        let flag = false;
        
        for(const char of words[i]){
            if(cloned.has(char)) cloned.set(char, cloned.get(char) - 1);
        }

        for(const [char, freq] of cloned){
            if(freq >= 1){
                flag = true;
                break;
            }
        }

        if(!flag) res = words[i];
    }

    return res;
};