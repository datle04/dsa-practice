function groupAnagrams(strs: string[]): string[][] {
    let map = new Map<string, string[]>();

    for (const s of strs){
        let temp = s.split("").sort().join("");
        if(map.has(temp)){
            map.get(temp)!.push(s);
        } else {
            map.set(temp, [s]);
        }
    };

    return Array.from(map.values());
};