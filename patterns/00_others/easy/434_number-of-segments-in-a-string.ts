function countSegments(s: string): number {
    if(s === "") return 0;
    let res = s.split(" ").filter(word => word !== "");
    return res.length;
};