function isAnagram(s: string, t: string): boolean {
    let freq = new Map<string, number>();
    for(const char of s){
        if(freq.has(char)){
            freq.set(char, freq.get(char)! + 1);
        } else {
            freq.set(char, 1);
        }
    }

    for(const char of t){
        if(freq.has(char)){
            freq.set(char, freq.get(char)! - 1);
        } else {
            freq.set(char, -1);
        }
    }

    for(const [char, num] of freq){
        if(num !== 0) return false;
    }
    return true;
};