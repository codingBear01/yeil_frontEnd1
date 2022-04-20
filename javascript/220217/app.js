const arr = [-1, 3, 1, -55, 26, -4];
let minusArr = [];
let plusArr = [];

for (let i = 0; i < arr.length; ++i) {
  arr[i] < 0 ? minusArr.push(arr[i]) : plusArr.push(arr[i]);
}

const result = minusArr.concat(plusArr);

console.log(result);
