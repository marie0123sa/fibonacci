'use strict';
// フィボナッチ数列を４０番目まで出力する
const memo = new Map();
memo.set(0, 0);   // フィボナッチ０は０、１は１
memo.set(1, 1);
function fib(n) {
    if (memo.has(n)) { // メモに数値があるか確認
        return memo.get(n);
    } 
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i ++) {
    console.log(fib(i));
}
