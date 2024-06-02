function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function setupGame() {
  let boxes = [
    { box: 1, isWinning: false },
    { box: 2, isWinning: false },
    { box: 3, isWinning: false }
  ]
  
   boxes[getRandomInt(boxes.length)].isWinning = true
   
   return boxes
}

function removeNonWinningBox (boxes) {
  const boxToRemove = getRandomInt(boxes.length);
  
  if(boxes[boxToRemove].isWinning === true) return removeNonWinningBox(boxes);
  boxes.splice(boxToRemove, 1)
  return boxes
}

function removeAllNonWinningBox (boxes) {
  if(boxes.length == 1) return boxes
  const boxesB = removeNonWinningBox(boxes)
  return removeAllNonWinningBox(boxes);
}

function game() {
  const chosedNumber = getRandomInt(3)
  return chosedNumber === removeAllNonWinningBox(setupGame())[0].box
}

console.log(game())
