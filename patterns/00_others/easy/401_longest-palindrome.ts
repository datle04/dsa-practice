function longestPalindrome(s: string): number {
    let map = new Map<string, number>();
    let res = 0;

    for(const char of s) {
      if(map.has(char)){
        map.set(char,  map.get(char) + 1);
      } else {
        map.set(char, 1);  
      }
    }
    
    for(const [char, freq] of map){
        if(freq % 2 !== 0 && freq / 2 >= 1){
            res += freq - 1;
        } else if (freq % 2 === 0 && freq >= 2){
            res += freq;
        }
    }

    return res < s.length ? res + 1 : res
};