var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(el, arr) {
  return [el, ...arr];
}

function destructivelyAddElementToBeginningOfArray(el, arr) {
  arr.unshift(el);
  return arr;
}

function accessElementInArray(arr, i) {
  return arr[i];
}

function removeElementFromBeginningOfArray(arr) {
  arr.slice()
}