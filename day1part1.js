import fs from 'fs'

const arrOne = []
const arrTwo = []
let finalAnswer = 0

fs.readFile('ques.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('error while reading the file')
    return
  }

  function compareNumbers(a, b) {
    return a - b
  }

  const lines = data.trim().split("\n")
  lines.forEach(line => {
    const [col1, col2] = line.trim().split(/\s+/)
    arrOne.push(Number(col1))
    arrTwo.push(Number(col2))
  })

  arrOne.sort(compareNumbers)
  arrTwo.sort(compareNumbers)

  for (let i = 0; i < arrOne.length; i++) {
    let difference = Math.abs(arrOne[i] - arrTwo[i])
    finalAnswer = finalAnswer + difference
  }
  console.log('Ans -> ', finalAnswer)
})

