function isPerfectSquare(num: number): boolean {
    if(num <= 1) return true;  

    let left = 1;
    let right = num;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let mul = mid * mid;
        if(mul === num) return true;
        if(mul > num){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
};