function characterReplacement(s: string, k: number): number {
    let freq = new Map();
    let maxFreq = 0;
    let left = 0;
    let res = 0;

    for(let right = 0; right < s.length; right++){
        freq.set(s[right], (freq.get(s[right]) ?? 0) + 1);
        maxFreq = Math.max(freq.get(s[right]), maxFreq);
        
        while ((right - left + 1) - maxFreq > k){
            freq.set(s[left], (freq.get(s[left]) ?? 0) - 1);
            left++;
        }

        res = Math.max(res, right - left + 1);
    }

    return res;
};