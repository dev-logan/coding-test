const scores = [[85, 90], [65, 67], [88, 87], [88, 87], [73, 81], [65, 89],[99, 100], [80, 94]]
let total1 = 0
let total2 = 0
for (const score of scores) {
	const [score1, score2] = score
	total1 += score1
	total2 += score2
}

let priority
if (total1 < total2) {
	priority = 1
} else if (total1 > total2) {
	priority = 2
} else {
	priority = 0
}

const students = scores.map((x, i) => [i + 1, x[0], x[1]])

students.sort((a, b) => {
    sumA = a[1] + a[2]
    sumB = b[1] + b[2]
    if (sumA > sumB) {
        return -1
    } else if (sumA === sumB) {
        if (priority === 1) {
            if (a[1] > b[1]) {
                return -1
            }
        } else if (priority === 2) {
            if (a[2] > b[2]) {
                return -1
            }
        } else {
            if (a[0] < b[0]) {
                return -1
            }
        }
    }
})

const rankId = students.map((x, i) => [i + 1, x[0]])
rankId.sort((a,b) => a[1] - b[1])
const result = rankId.map(x => x[0])
console.log(result)