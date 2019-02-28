const printArray = (arr) => {
  console.log(arr.join(' '));
}


const print2dArray = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      printArray(arr[i])
    } else {
      console.log(arr[i]);
    }
  }
  console.log();
}
// Example 2
const arrayOfZeroes = (h,w) => {
  let toReturn = []
  for (let i = 0; i < h; i += 1) {
    let toAdd = []
    for (let j = 0; j < w; j += 1){
      toAdd.push(0)
    }
    toReturn.push(0)
  }
  return toReturn
}

// Exampl
const multiDimArr = (h, w) => {
  let text = ''
  for (let i = 0; i < w; i += 1) {
    text += '0 '
  }
  for (let i = 0; i < h; i += 1) {
    console.log(text);
  }
}

const gen2DimArray = (w, h) => {
  for (let i = 0; i < w; i += 1) {
    console.log(0);
    for (let n = 0; i < h; n += 1) {
      console.log(0);
    }
  }
}

// const array = [[1,2,3],[4,5,6],[7,8,9]]
// const array2 = [1,2,3,4,5,6,7,8,9,]
// const array3 = [1,2,[3,4,5],[6,7],8,9]
// print2dArray(array)
// print2dArray(array2)
// print2dArray(array3)
export {
  print2dArray,
  gen2DimArray
}
