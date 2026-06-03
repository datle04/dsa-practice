function reverseVowels(s: string): string {
    let map = new Map([
        ["a", 1],
        ["e", 2],
        ["u", 3],
        ["o", 4],
        ["i", 5],
        ["A", 1],
        ["E", 2],
        ["U", 3],
        ["O", 4],
        ["I", 5],
    ]);

    let res = s.split('');
    let left = 0;
    let right = res.length - 1;

    while(left < right){
        if(map.has(res[left]) && map.has(res[right])){
            let temp = res[left];
            res[left] = res[right];
            res[right] = temp;
            left++;
            right--;
        } else if (map.has(res[left])){
            right--;
        } else if (map.has(res[right])){
            left++;
        } else {
            left++;
            right--;
        }
    }

    return res.join('');
};