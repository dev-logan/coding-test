// https://www.acmicpc.net/problem/5002

// 엄청 복잡하게 푼 내 

const fs = require('fs')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const maxDifference = +input.shift()
const stack = input[0].split('').reverse()

const inClub = []
let numM = 0
let numW = 0

while(true) {
    if (!stack.length) break
    if (stack.length === 1) {
        if (stack[0] === 'M') {
            if (Math.abs(numM + 1 - numW) <= maxDifference) {
                inClub.push(stack.pop())
                numM++
                continue
            } else break
        } else {
            if (Math.abs(numW + 1 - numM) <= maxDifference) {
                inClub.push(stack.pop())
                numW++
                continue
            } else break
        }
    } 

    const first = stack[stack.length - 1]
    const second = stack[stack.length - 2]

    if (first === 'M') {
        if (Math.abs(numM + 1 - numW) <= maxDifference) {
            inClub.push(stack.pop())
            numM++
            continue
        } else {
            if (second === 'M') {
                if (Math.abs(numM + 1 - numW) <= maxDifference) {
                    const reserve = stack.pop()
                    inClub.push(stack.pop())
                    stack.push(reserve)
                    numM++
                    continue
                } else break
            } else {
                if (Math.abs(numW + 1 - numM) <= maxDifference) {
                    const reserve = stack.pop()
                    inClub.push(stack.pop())
                    stack.push(reserve)
                    numW++
                    continue
                } else break
            }
        }
    } else {
        if (Math.abs(numW + 1 - numM) <= maxDifference) {
            inClub.push(stack.pop())
            numW++
            continue
        } else {
            if (second === 'M') {
                if (Math.abs(numM + 1 - numW) <= maxDifference) {
                    const reserve = stack.pop()
                    inClub.push(stack.pop())
                    stack.push(reserve)
                    numM++
                    continue
                } else break
            } else {
                if (Math.abs(numW + 1 - numM) <= maxDifference) {
                    const reserve = stack.pop()
                    inClub.push(stack.pop())
                    stack.push(reserve)
                    numW++
                    continue
                } else break
            }
        }
    }
}

console.log(numM + numW)





// 주현님 풀이
// 클럽 스택 안에 들어가는 요소들을 지워주는 방식으로 접근

const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

let ans = 0;
let X = +input[0];
let line = input[1].split('').reverse();
let stack = [];


while (stack.length <= X && line.length != 0) {
    let fir = line.pop();
    let sec = line.length ? line.pop() : null;

    if (stack.length) {
        let top = stack.slice(-1);
        if (top != fir) {
            stack.pop();
            ans++;
            if (sec) line.push(sec);
            continue;
        }
        else if (sec != null && top != sec) {
            stack.pop();
            ans++;
            line.push(fir);
            continue;
        }
    }
    ans++;
    stack.push(fir);
    if (sec) line.push(sec);
}
if (stack.length > X) ans--;
console.log(ans);
