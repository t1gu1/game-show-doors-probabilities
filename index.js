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

function gameWhereUserKeepTheSameDoor() {
  const chosedNumber = getRandomInt(3)
  return chosedNumber === removeAllNonWinningBox(setupGame())[0].box
}

function removeNonWinningAndUserBox (boxes, userBox) {
  const boxToRemove = getRandomInt(boxes.length);
  
  if(boxes[boxToRemove].isWinning === true || boxes[boxToRemove].box === userBox) return removeNonWinningBox(boxes, userBox);
  boxes.splice(boxToRemove, 1)
  return boxes
}

function gameWhereUserChangeDoor() {
  let boxes = setupGame();
  let chosedNumber = getRandomInt(3)
  let boxesRemaning = removeNonWinningBox(boxes)

  chosedNumber = boxesRemaning.filter(({box}) => box !== chosedNumber)[0]

  return chosedNumber.isWinning;
}

function countProbabilities() {
  let results = {
    keepSameDoor: {
      wins: 0,
      looses: 0
    },
    changeDoor: {
      wins: 0,
      looses: 0
    }
  }

  for (let i = 0; i < 1000000; i++) {
    if(gameWhereUserKeepTheSameDoor()) results.keepSameDoor.wins++
    else results.keepSameDoor.looses++

    if(gameWhereUserChangeDoor()) results.changeDoor.wins++
    else results.changeDoor.looses++
  }

  return results
}

console.log(countProbabilities())
