function canConstruct(ransomNote: string, magazine: string): boolean {
    let freq = new Map<string, number>();

    for(const char of magazine){
        if(freq.has(char)){
            freq.set(char, freq.get(char)! + 1);
        } else {
            freq.set(char, 1);
        };
    };

    for(const char of ransomNote){
        if(freq.has(char)){
            freq.set(char, freq.get(char)! - 1);
        } else {
            return false;
        }
    }

    for(const [key, val] of freq){
        if(val < 0) return false;
    }

    return true;
};