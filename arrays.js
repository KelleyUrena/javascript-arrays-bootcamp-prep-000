var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(el, arr) {
  const newArr = [...arr];
  for(var i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }
  
}

function destructivelyAddElementToBeginningOfArray(el, arr) {
  arr.unshift(el);
  return arr;
}
