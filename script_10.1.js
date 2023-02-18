const result = prompt("Введите число", "");

if (
  typeof +result != "number" ||
  result == "" ||
  isNaN(result) ||
  result == 0
) {
  console.log(typeof result);
  alert("Упс, кажется, вы ошиблись");
} else if (isNaN(result)) {
  alert("Введено не число");
} else if (result % 2 === 0) {
  alert("Число четное");
} else {
  alert("число нечетное");
}
