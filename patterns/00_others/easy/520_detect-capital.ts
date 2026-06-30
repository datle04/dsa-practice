function detectCapitalUse(word: string): boolean {
    let mustBeAllCapital = false;
    
    if((word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) && (word.charCodeAt(1) >= 65 && word.charCodeAt(1) <= 90)){
        mustBeAllCapital = true;
    }
    
    for(let i = 0; i < word.length; i++){
        let code = word[i].charCodeAt(0); 

        if(mustBeAllCapital === true){
            if(code < 65 || code > 90) return false;
        } else {
            if((code >= 65 && code <= 90) && i !== 0) return false;
        }
    }

    return true;
};