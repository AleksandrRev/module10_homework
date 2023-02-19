let arr = [2, 2, 2, 2];
let answer;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      answer = false;
    }
  }
}
if (answer == false) {
  console.log(false);
} else {
  console.log(true);
}
