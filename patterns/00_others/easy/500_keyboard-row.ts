function findWords(words: string[]): string[] {
    const map = new Map();
    for(const c of 'qwertyuiop') map.set(c, 1);
    for(const c of 'asdfghjkl') map.set(c, 2);
    for(const c of 'zxcvbnm') map.set(c, 3);

    let res: string[] = [];

    for(const word of words){
        const w = word.toLowerCase();
        let base = map.get(w[0]);
        let flag = true;
        for(const char of w){
            if(map.get(char) !== base){
                flag = false;
                break;
            }
        }
        if(flag) res.push(word);
    }

    return res;
};