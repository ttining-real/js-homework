function getValueAtObject(obj, key) {

  // 흑흑 진짜 어떤 문을 어떻게 써야할 지 하나도 모르겠다..
  // 정말 너무 우울해 ㅠ0ㅠ 너무 슬퍼
  // undefined는 왜 자꾸 나오는 걸까...? 흑흑...
  
  if(key in obj) {
    console.log(obj[key]);
  } else {
    console.log('Error');
  }

}

const person = {
  name: 'Alice',
  age: 25,
  city: 'Wonderland',
};

console.log(getValueAtObject(person, 'name')); // 'Alice'
console.log(getValueAtObject(person, 'age'));  // 25
console.log(getValueAtObject(person, 'city')); // 'Wonderland'
console.log(getValueAtObject(person, 'country')); // Error !