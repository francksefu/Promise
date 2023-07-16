function merging(arr) {
    l = arr.length / 2;
    d = 0;
    merge(arr, l, d);
    l = arr.length;
    d = arr.length / 2;
    merge(arr, l, d);
    l = arr.length;
    d = 0;
    return merge(arr, l, d);
}

function merge(arr, l , d) {
  
  for (let i = d + 1; i < l; i += 2) {
    if ( arr[i-1] > arr[i]) {
        let c = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = c;
    }
  }

  for ( let i = d + 0; i < l; i++ ) {
    for(let j = i + 1; j < l; j++) {
        if ( arr[i] > arr[j]) {
            let c = arr[j];
            arr[j] = arr[i];
            arr[i] = c;
            break;
        }
    }
  }

  return arr;
}

console.log(merging([3, 1, 5, 2, 8, 6, 10, 9, 4, 11])); // [1, 2, 3,  4,  5,6, 8, 9, 10, 11]