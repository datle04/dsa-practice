function maxProfit(prices: number[]): number {
    let buy = 0;
    let maxProfit = 0;

    for(let sell = 0; sell < prices.length; sell++){
        maxProfit = Math.max(maxProfit, prices[sell] - prices[buy]);
        if (prices[sell] < prices[buy]) buy = sell;
    }

    return maxProfit;
};