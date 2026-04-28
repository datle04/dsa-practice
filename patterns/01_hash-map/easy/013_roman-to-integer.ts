function romanToInt(s: string): number {
    let map = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);

    let res = 0;

    for(let i = 0; i < s.length; i++){
        if(map.get(s[i + 1])! > map.get(s[i])!){
            res = res + (map.get(s[i + 1])! - map.get(s[i])!);
            i++;
        } else {
            res = res + map.get(s[i])!;
        }
    }

    return res;
};