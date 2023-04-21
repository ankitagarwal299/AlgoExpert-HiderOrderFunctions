Array.prototype.myforEach = function (callback) {
  for (let item of this) {
    console.log(item);
  }
};

array.myforEach((item) => {
  console.log(item);
});

Array.prototype.myfilter = function (callback) {
  // In this function 'this' is the original array

  let output = [];
  for (let i = 0; i < this.length; i++) {
    console.log(callback(this[i], i, this)); //return true or false, based on that we need item
    if (callback(this[i], i, this)) {
      output.push(this[i]);
    }
  }
  return output;
};

var array = [1, 2, 3, 4, 5];

let filteredRes = array.myfilter((item, index, arr) => {
  return item + index + arr[1] > 5;
});

console.log(filteredRes);

Array.prototype.myMap = function (callback) {
  // In this function 'this' is the original array

  let output = [];
  for (let i = 0; i < this.length; i++) {
    console.log(callback(this[i], i, this)); //return true or false, based on that we need item
    output.push(callback(this[i], i, this));
  }
  return output;
};

var array = [1, 2, 3, 4, 5];

let mappedRes = array.myMap((item, index, arr) => {
  return item + index + arr[1]; //do some manipulation doesnot matter this statement
});
console.log(mappedRes);

Array.prototype.myReduce = function (callback, initialValue) {
  // In this function 'this' is the priginal array

  let output = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (i == 0 && initialValue == undefined) {
      output = this[0];
    } else {
      //console.log(callback(output, this[i], i, this));//return each step
      //else is important
      output = callback(output, this[i], i, this);
    }
  }
  return output;
};

var array = [1, 2, 3, 4, 5];

let reducedRes = array.myReduce((accumulator, item, index, arr) => {
  return accumulator + item + index + arr[1]; //do some manipulation doesnot matter this statement
}, 3);
console.log(reducedRes);
