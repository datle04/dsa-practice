function lengthOfLongestSubstring(s: string): number {
    let left = 0;
    let res = 0;
    let set = new Set();

    for(let right = 0; right < s.length; right++){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        res = Math.max(res, right - left + 1);
    }

    return res;
};