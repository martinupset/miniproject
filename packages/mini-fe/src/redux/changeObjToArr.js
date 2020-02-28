export const objOfValueToArr = (object, att) => {
  var arr = [];
  var i = 0;
  for (var item in object) {
  arr[i] = object[item][att];
  i++;
  }
  return arr;
  }
