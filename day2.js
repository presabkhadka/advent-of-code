import fs from 'fs'

const arrOne = []
const arrTwo = []
let leftNum;
let answer = 0;
let count = 0;

fs.readFile('ques.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Errow while reading the file")
    return
  }

  function sorter(a, b) {
    return a - b
  }

  const lines = data.trim().split("\n")

  lines.forEach(line => {
    const [col1, col2] = line.trim().split(/\s+/)
    arrOne.push(Number(col1))
    arrTwo.push(Number(col2))
  })

  arrOne.sort(sorter);
  arrTwo.sort(sorter);

  for (let i = 0; i < arrTwo.length; i++) {
    leftNum = arrOne[i]

    let newArr = arrTwo.filter(x => x === leftNum)
    count = newArr.length
    answer = answer + (leftNum * count)

  }
  console.log("answer", answer)
})
