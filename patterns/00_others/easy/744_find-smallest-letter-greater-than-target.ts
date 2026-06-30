function nextGreatestLetter(letters: string[], target: string): string {
    let left = 0;
    let right = letters.length - 1;
    let targetCode = target.charCodeAt(0);
    if(letters[letters.length - 1].charCodeAt(0) <= targetCode) return letters[0];

    while(left < right){
        let mid = Math.floor((left + right) / 2);
        let code = letters[mid].charCodeAt(0);

        if(code <= targetCode){
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return letters[right];
};