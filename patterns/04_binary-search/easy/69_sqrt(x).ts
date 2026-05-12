function mySqrt(x: number): number {
    let left = 1;
    let right = x;
    let res = 0;

    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);

        if(mid*mid === x) return mid;
        if(mid*mid > x){
            right = mid - 1;
        } else {
            res = mid;
            left = mid + 1;
        }
    }

    return res;
};