function fibs(num) {
  const arr = [0, 1];
  for(let i = 2; i < num; i++) {
    arr.push(arr[i-1] + arr[i-2])
  }
  return arr;
}

console.log(fibs(8));
const arr = [0, 1];
function fibsRec(num, i = 2) {
  if (num === 2) return arr;
  else {
    arr.push(arr[i - 1] + arr[i - 2]);
    return fibsRec(num - 1, i + 1);
  }
}

function sum(num) {
  if(num == 0) {
    return num;
  } else {
    return num + sum(num - 1);
  }
}
console.log(sum(10));