function mostCommonWord(paragraph: string, banned: string[]): string {
    let bannedSet = new Set(banned.map(w => w));
    const map = new Map<string, number>();
    let res = "";
    let max = 0;

    let current = ""

    const flush = () => {
        if(current === "") return;
        if(!bannedSet.has(current)){
            const freq = (map.get(current) ?? 0) + 1;
            map.set(current, freq);
            if(freq > max){
                max = freq;
                res = current;
            }
        }

        current = "";
    }

    for(const ch of paragraph){
        const lower = ch.toLowerCase();
        if(lower >= 'a' && lower <= 'z'){
            current += lower;
        } else {
            flush();
        }
    }
    flush();

    return res;
};
