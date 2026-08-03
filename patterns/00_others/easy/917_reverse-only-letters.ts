function reverseOnlyLetters(s: string): string {
    let st = s.split('');
    let left = 0;
    let right = s.length - 1;
    
    function isCharacter(char: string): boolean  {
        let code = char.charCodeAt(0);
        if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) return true;

        return false;
    }

    while(left <= right){
        if(!isCharacter(st[left]) || !isCharacter(st[right])){
            if(!isCharacter(st[left])) left++;
            if(!isCharacter(st[right])) right--;
            continue;
        } else {
            let temp = st[left];
            console.log(st[left], st[right])
            st[left] = st[right];
            st[right] = temp;
            left++;
            right--;
        }
    }

    return st.join('');
};