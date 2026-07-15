function shortestToChar(s: string, c: string): number[] {
    let leftPass = new Array(s.length).fill(Infinity);
    let rightPass = new Array(s.length).fill(Infinity);
    let res = new Array(s.length).fill(Infinity);
    
    let encounterFirstc = false;
    let left = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === c){
            left = 0;
            if(!encounterFirstc) encounterFirstc = true;
        }
        leftPass[i] = encounterFirstc ? left : Infinity;
        left++;
    }

    encounterFirstc = false;
    let right = s.length - 1;
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] === c){
            right = 0;
            if(!encounterFirstc) encounterFirstc = true;
        }
        rightPass[i] = encounterFirstc ? right : Infinity;
        right++;
    }

    for(let i = 0; i < res.length; i++){
        res[i] = Math.min(leftPass[i], rightPass[i]);
    }

    return res;
};