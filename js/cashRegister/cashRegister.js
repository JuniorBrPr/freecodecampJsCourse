const VALUES = [["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]];

function checkCashRegister(price, cash, cid) {
    let change;
    let changeDue = cash - price;
    let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);
    let changeArr = [];
    let status = 'OPEN';

    if (totalCid < changeDue) {
        status = 'INSUFFICIENT_FUNDS';
        change = [];
    } else if (totalCid === changeDue) {
        status = 'CLOSED';
        change = cid;
    } else {
        for (let i = cid.length - 1; i >= 0; i--) {
            let value = 0;
            while (changeDue >= VALUES[i][1] && cid[i][1] > 0) {
                changeDue -= VALUES[i][1];
                changeDue = Math.round(changeDue * 100) / 100;
                cid[i][1] -= VALUES[i][1];
                value += VALUES[i][1];
            }
            if (value > 0) {
                changeArr.push([VALUES[i][0], value]);
            }
        }
        if (changeDue > 0) {
            status = 'INSUFFICIENT_FUNDS';
            change = [];
        } else {
            change = changeArr;
        }
    }
    return {
        status: status,
        change : change
    };
}