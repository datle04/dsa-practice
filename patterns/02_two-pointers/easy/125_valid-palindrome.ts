function isPalindrome(s: string): boolean {
    let tempS = s.toLowerCase();
    let arr = [];

    for (const c of tempS){
        let code = c.charCodeAt(0);
        if(code >= 97 && code <= 122 || code >= 48 && code <= 57) arr.push(c);
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right){
        if(arr[left] !== arr[right]) return false;
        left++;
        right--;
    }

    return true;
};