// https://www.acmicpc.net/problem/1406

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let initial = input.shift();
const numCommands = input.shift();
const commands = input;

let leftStack = initial.split("");
let rightStack = [];

for (let i = 0; i < numCommands; i++) {
  if (commands[i] === "L" && leftStack.length > 0) {
    rightStack.push(leftStack.pop());
  }
  if (commands[i] === "D" && rightStack.length > 0) {
    leftStack.push(rightStack.pop());
  }
  if (commands[i] === "B") {
    leftStack.pop();
  }
  if (commands[i][0] === 'P') {
    let toAdd = commands[i][2];
    leftStack.push(toAdd)
  }
}

console.log(leftStack.join('') + rightStack.reverse().join(''))




// 실패 1
const fs = require('fs')
const input = fs.readFileSync('backjoon.txt').toString().trim().split('\n')

let initial = input.shift()
const numCommands = input.shift()
const commands = input

let cursor = initial.length

for (let i = 0; i < numCommands; i++) {
    if (commands[i] === 'L') {
        if (cursor === 0) continue
        cursor--
    } else if (commands[i] === 'D') {
        if (cursor === initial.length) continue
        cursor++
    } else if (commands[i] === 'B') {
        if (cursor === 0) continue
        let frontPart = initial.substring(0,cursor - 1)
        let backPart = initial.substring(cursor)
        initial = frontPart + backPart
        cursor--
    } else {
        let toAdd = commands[i][commands[i].length - 1]
        let frontPart = initial.substring(0,cursor)
        let backPart = initial.substring(cursor)
        initial = frontPart + toAdd + backPart
        cursor++
    }
}

console.log(initial)




// 실패 2
class Node {
  constructor(data) {
    this.data = data;
  }
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
  }

  append(data) {
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = new Node(data);
  }

  print_all() {
    let cur = this.head;
    let toPrint = "";
    while (cur) {
      toPrint += cur.data;
      cur = cur.next;
    }
    console.log(toPrint);
  }

  get_node(index) {
    let cur = this.head;
    let count = 0;
    while (count < index) {
      cur = cur.next;
      count++;
    }
    return cur;
  }

  add_node(index, value) {
    if (index === 0) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let beforeNode = this.get_node(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = new Node(value);
    beforeNode.next.next = afterNode;
  }

  delete_node(index) {
    if (index === 0) {
      this.head = this.get_node(index + 1);
      return;
    }
    let beforeNode = this.get_node(index - 1);
    let afterNode = this.get_node(index + 1);
    beforeNode.next = afterNode;
  }
}

const fs = require("fs");
const input = fs.readFileSync("backjoon.txt").toString().trim().split("\n");

let initial = input.shift();
const numCommands = input.shift();
const commands = input;

const linkedInitial = new LinkedList(initial[0]);
for (let i = 1; i < initial.length; i++) {
  linkedInitial.append(initial[i]);
}

let cursor = initial.length;
let wordLength = initial.length;

for (let i = 0; i < numCommands; i++) {
  if (commands[i] === "L") {
    if (cursor === 0) continue;
    cursor--;
  } else if (commands[i] === "D") {
    if (cursor === wordLength) continue;
    cursor++;
  } else if (commands[i] === "B") {
    if (cursor === 0) continue;
    linkedInitial.delete_node(cursor - 1);
    cursor--;
    wordLength--;
  } else {
    let toAdd = commands[i][commands[i].length - 1];
    linkedInitial.add_node(cursor, toAdd);
    cursor++;
    wordLength++;
  }
}
linkedInitial.print_all();
