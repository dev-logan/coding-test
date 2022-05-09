salaries = [[1,1000],[1,1000]]
days = 3650

let answer = 0
for (const salary of salaries) {
    const [interval, single] = salary
    const count = parseInt(days / interval)
    let total
    if (days % interval === 0) {
        total = count * single
    } else {
        total = (count + 1) * single
    }
    answer += total
}

console.log(answer)