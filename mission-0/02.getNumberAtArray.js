function getNumberAtArray(arr, index) {
  // 흑흑.. 에러가 너무 많이 나와 왜 나오지 ,, 정말 너무 슬프다...

  // numbers.forEach((item, idx) => {
  //   if (idx === index) {
  //     console.log(item);
  //   } else if (index > numbers.length || index < 0) {
  //     console.log('Error !');
  //   }
  // });

  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      console.log(numbers[i]);
    } else {
      console.log('Error !');
    }
  }


}
const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
