// Implement Functionality
// Ex7 - Implement The Following JS Methods -
// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without otherjsmethods)

function filter(arr, callback) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  }
function map(arr, callback) {
    const mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
      mappedArr.push(callback(arr[i], i, arr));
    }
    return mappedArr;
  }