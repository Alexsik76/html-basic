// Отримати елементи форми та кнопку
let inputs = document.querySelectorAll("input[type=number]");

// Створити елемент для гістограми
let histogram = document.createElement("div");
histogram.style.display = "flex";
histogram.style.alignItems = "flex-end";
histogram.style.height = "200px";
histogram.style.marginTop = "20px";
document.body.append(histogram);

// Функція для створення стовпця гістограми
function createBar(value, max) {
  let bar = document.createElement("div");
  bar.style.width = "20px";
  bar.style.height = (value / max) * 200 + "px";
  bar.style.backgroundColor = "blue";
  bar.style.margin = "5px";
  return bar;
}

// Функція для оновлення гістограми
function updateHistogram() {
  // Очистити гістограму
  histogram.innerHTML = "";

  // Отримати масив чисел з полів форми
  let numbers = Array.from(inputs).map(input => input.valueAsNumber);

  // Знайти максимальне число
  let max = Math.max(...numbers);

  // Створити стовпці гістограми для кожного числа
  for (let number of numbers) {
    let bar = createBar(number, max);
    histogram.append(bar);
  }
}
updateHistogram();
// Додати обробник події для полів

for (field of inputs){
    field.addEventListener("click", updateHistogram);
}
