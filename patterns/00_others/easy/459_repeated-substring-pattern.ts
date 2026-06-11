function repeatedSubstringPattern(s: string): boolean {
    let s2 = s + s;
    return s2.slice(1, -1).includes(s);
};