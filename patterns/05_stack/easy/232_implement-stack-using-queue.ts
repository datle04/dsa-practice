class MyQueue {
    private wStack: number[];
    private rStack: number[];

    constructor() {
        this.wStack = [];
        this.rStack = [];
    }

    push(x: number): void {
        this.wStack.push(x);
    }

    pop(): number {
        if(this.rStack.length === 0){
            while(this.wStack.length !== 0){
                let temp = this.wStack.pop()!;
                this.rStack.push(temp);
            }
        }

        let val = this.rStack.pop()!;
        return val;
    }

    peek(): number {
        if(this.rStack.length === 0){
            while(this.wStack.length !== 0){
                let temp = this.wStack.pop()!;
                this.rStack.push(temp);
            }
        }
        return this.rStack[this.rStack.length - 1];
    }

    empty(): boolean {
        return this.wStack.length === 0 && this.rStack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */