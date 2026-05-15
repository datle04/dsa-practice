function isValid(s: string): boolean {
    let map = new Map([
        ["(", ")"],
        ["[", "]"],
        ["{", "}"]
    ]);
    let stack: string[] = [];

    for(const bracket of s){
        if(map.has(bracket)){
            stack.push(bracket);
        } else {
            let open: string = stack.pop()!;
            if(bracket !== map.get(open)) return false;
        }
    }

    return stack.length === 0;
};