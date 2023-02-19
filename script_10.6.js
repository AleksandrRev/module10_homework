let arr = [3, 3, 3, 3];
let answer = true;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      answer = false;
    }
  }
}
if (answer == false) {
  console.log(answer);
} else {
  console.log(answer);
}
