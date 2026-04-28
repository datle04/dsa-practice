function longestCommonPrefix(strs: string[]): string {
    let result = "";
    let minLength = 10 * 1000;

    for(const s of strs){
        if(s.length < minLength) minLength = s.length;
    };

    for (let i = 0; i < minLength; i++){
        let char = strs[0][i];

        for (const s of strs){
            if(s[i] !== char) return result;
        }

        result = result + char;
    }

    return result;
};