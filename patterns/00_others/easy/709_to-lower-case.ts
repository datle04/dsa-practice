function toLowerCase(s: string): string {
    let res = [];
    for(let i = 0; i < s.length; i++){
        let code = s.charCodeAt(i);
        if(code >= 65 && code <= 90){
            res.push(String.fromCharCode(code + 32));
        } else {
            res.push(s[i]);
        }
    }

    return res.join('');
};