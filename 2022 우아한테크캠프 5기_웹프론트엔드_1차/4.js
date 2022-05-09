// const dict = {
// 	0: ['O', '()'],
// 	1: ['I'],
// 	2: ['Z', 'S', '7_'],
// 	3: ['E', 'B'],
// 	4: ['A'],
// 	5: ['Z', 'S'],
// 	6: ['b', 'G'],
// 	7: ['T', 'Y'],
// 	8: ['B', 'E3'],
// 	9: ['g', 'q'],
// }

const dicts = []
for (const a of ['O', '()']) {
    for (const b of ['I']) {
        for (const c of ['Z', 'S', '7_']) {
            for (const d of ['E', 'B']) {
                for (const e of ['A']) {
                    for (const f of ['Z', 'S']) {
                        if (c === f) {
                            continue
                        }
                        for (const g of ['b', 'G']) {
                            for (const h of ['T', 'Y']) {
                                for (const i of ['B', 'E3']) {
                                    if (d === i) {
                                        continue
                                    }
                                    for (const j of ['g', 'q']) {
                                        dicts.push([a,b,c,d,e,f,g,h,i,j])
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

const numstrs = ['ZASSETE', 'S4Z537B', '7_ASZEYB']
const words = ['2455373', '425', '373', '378']

const results = []
for (const word of words) {
    const allAltWords = []
    for (const dict of dicts) {
        let altWord = ''
        for (const character of word) {
            altWord += dict[+character]
        }
        allAltWords.push(altWord)
    }
    results.push(allAltWords)
}

answer = []
for (const result of results) {
    let count = 0
    for (const numstr of numstrs) {
        let success = false
        for (const altWord of result) {
            if (numstr.includes(altWord)) {
                success = true
                break
            }
        }
        if (success) {
            count++
        }
    }
    answer.push(count)
}

console.log(answer)