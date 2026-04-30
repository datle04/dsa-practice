class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
      let res = ""
      for (const word of strs){
        let length = word.length;
        res += length.toString() + "#" + word; 
      }
      return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let res = [];

        let i = 0;

        while(i < str.length){
            let numberToExtract = "";
            while(str[i] !== "#"){
                numberToExtract += str[i];
                i++;
            }
            i++;
            let length = Number(numberToExtract);
            res.push(str.slice(i, i + length));
            i += length;
        }

        return res;
    }
}
