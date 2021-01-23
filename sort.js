let arr = [5,7,2,4,5,8,9,2,3,4];


function quickSort(arr, start = 0, end = (arr.length - 1)) {
  let pivotIndex = Math.floor((end + start) / 2);
  let pivot = arr[pivotIndex];
  let st = start;
  let en = end;

  while (st <= en) {
    while (arr[st] < pivot) {
      st++
    }

    while (arr[en] > pivot) {
      en--
    }

    if (st <= en) {
      let buff = arr[st];
      arr[st] = arr[en];
      arr[en] = buff;
      st++;
      en--;
    }

  }
  if (start < en) {
    quickSort(arr, start, en);
  }

  if (end > st) {
    quickSort(arr, st, end);
  }


}

quickSort(arr);
console.log(arr);