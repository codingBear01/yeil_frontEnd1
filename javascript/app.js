const str1 = 'my my my my id name is myeongmo';

function IndexOf(_sour, _str) {
  let idx = 0;
  // for (let i = 0; i < _sour.length; i++) {
  //   if (_sour[i] + _sour[i + 1] !== _str) {
  //     idx++;
  //   } else {
  //     return idx;
  //   }
  // }

  // let i = 0;
  // while (i < _sour.length) {
  //   if (_sour[i] + _sour[i + 1] !== _str) {
  //     i++;
  //     idx++;
  //   } else {
  //     return idx;
  //   }
  // }

  for (let i in _sour) {
    if (_sour[+i] + _sour[+i + 1] !== _str) {
      idx++;
    } else {
      return idx;
    }
  }
}

console.log(IndexOf(str1, 'is'));
