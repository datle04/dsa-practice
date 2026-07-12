function uniqueMorseRepresentations(words: string[]): number {
    let map = new Map([
        ['a', ".-"],
        ['b', "-..."],
        ['c', "-.-."],
        ['d', "-.."],
        ['e', "."],
        ['f', "..-."],
        ['g', "--."],
        ['h', "...."],
        ['i', ".."],
        ['j', ".---"],
        ['k', "-.-"],
        ['l', ".-.."],
        ['m', "--"],
        ['n', "-."],
        ['o', "---"],
        ['p', ".--."],
        ['q', "--.-"],
        ['r', ".-."],
        ['s', "..."],
        ['t', "-"],
        ['u', "..-"],
        ['v', "...-"],
        ['w', ".--"],
        ['x', "-..-"],
        ['y', "-.--"],
        ['z', "--.."], 
    ]);

    let res = new Set();

    function encode(word: string): string {
        let str = ""
        for(const char of word){
            str += map.get(char);
        } 

        return str;
    }

    for(const word of words){
        let encodedString = encode(word);
        res.add(encodedString);
    }

    return res.size;
};

