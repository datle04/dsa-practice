function wordPattern(pattern: string, s: string): boolean {
    let pMap = new Map();
    let wMap = new Map();
    let words = s.split(" ");

    if(pattern.length !== words.length) return false;
    
    for(let i = 0; i < pattern.length; i++){
        if(!pMap.has(pattern[i])){
            pMap.set(pattern[i], words[i]);
        } else {
            if(pMap.get(pattern[i]) !== words[i]) return false;
        }

        if(!wMap.has(words[i])){
            wMap.set(words[i], pattern[i]);
        } else {
            if(wMap.get(words[i]) !== pattern[i]) return false;
        }
    }

    return true;
};