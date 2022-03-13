// board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
// moves = [1,5,3,5,1,2,1,4]

function solution(board, moves) {
	let basket = []
	let cnt = 0
	for (let i = 0; i < moves.length; i++) {
		let idx = moves[i] - 1
		for (let j = 0; j < board.length; j++) {
			if (board[j][idx] == 0) continue //  0일 경우 집게는 계속 내려간다
			if (basket[basket.length - 1] === board[j][idx]) {
				//  바구니에 이미 같은 것이 있으면, 그것을 삭제하고, cnt에 2를 더한다
				basket.pop()
				cnt += 2
			} else {
				basket.push(board[j][idx]) //  바구니에 숫자를 넣고
			}
			board[j][idx] = 0 // 원래 있던 자리는 0으로 만든다
			break //  하나 빼고 다음 move로 넘어가야 함! (중요)
		}
	}
	return cnt
}
