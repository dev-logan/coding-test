const m = "ABC"

const musicinfos = ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]

console.log(solution(m, musicinfos))

function splitNote(note) {
    let noteArray = note.split('')
    for (let i = 0; i < noteArray.length; i++) {
        const letter = noteArray[i]
        if (letter === '#') {
            noteArray[i - 1] = noteArray[i - 1][0] + '#'
        } else {
            noteArray[i] += '0'
        }
    }
    noteArray = noteArray.filter((x) => x !== '#')
    return noteArray
}

function solution(m, musicinfos) {
    const mSplit = splitNote(m)
	const mString = mSplit.join('')

	let answerArray = []
    let index = 0
	for (const music of musicinfos) {
		const [start, end, title, note] = music.split(',')
		const length = (+end.slice(0,2) * 60 + +end.slice(3)) - (+start.slice(0,2) * 60 + +start.slice(3))
		const noteArray = splitNote(note)
		const completeNoteArray = []
		for (let i = 0; i < length; i++) {
			completeNoteArray.push(noteArray[i % noteArray.length])
		}
		const completeNoteString = completeNoteArray.join('')
		if (completeNoteString.includes(mString)) {
			answerArray.push([title, length, index])
		}
        index++
	}
    if (!answerArray.length) {
        return '(None)'
    }
    answerArray.sort((a,b) => {
        if (a[1] > b[1]) {
            return -1
        } else if (a[1] === b[1]) {
            if (a[2] < b[2]) {
                return -1
            }
        }
    })
    return answerArray[0][0]
}
