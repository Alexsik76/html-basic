// Створюємо одновимірний масив з довільних чисел
let arr = [3, -5, 7, -2, 9, -1, 4, -8, 6];
console.log("Вхідний масив:", arr);
// Знаходимо найбільший серед від’ємних та найменший серед додатних елементів масиву
let maxNegative = -Infinity; // Початкове значення для найбільшого від’ємного числа
let minPositive = Infinity; // Початкове значення для найменшого додатного числа

// Проходимо по всіх елементах масиву
for (let num of arr) {
  // Якщо число від’ємне і більше за поточне найбільше від’ємне, то оновлюємо maxNegative
  if (num < 0 && num > maxNegative) {
    maxNegative = num;
  }
  // Якщо число додатне і менше за поточне найменше додатне, то оновлюємо minPositive
  if (num > 0 && num < minPositive) {
    minPositive = num;
  }
}

// Упорядковуємо масив у порядку зменшення методом вибору
// Метод вибору працює так: на кожній ітерації ми шукаємо найбільший елемент в масиві і ставимо його на початок
// Потім повторюємо це для підмасиву, що залишився, виключаючи вже відсортовані елементи
// Для цього нам потрібно два вкладені цикли: один для проходження по всіх елементах, інший для пошуку найбільшого елемента

// Цикл зовнішній: проходимо по всіх елементах масиву, крім останнього
function sort_arr(arr){
    let sorted_arr = Array.from(arr);
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      // Цикл внутрішній: шукаємо найбільший елемент в підмасиві, що починається з i-го елемента
      // Припускаємо, що найбільший елемент знаходиться на i-й позиції
      let maxIndex = i; // Індекс найбільшого елемента
      let maxValue = sorted_arr[i]; // Значення найбільшого елемента
      // Проходимо по підмасиву, починаючи з i+1-го елемента
      for (let j = i + 1; j < sorted_arr.length; j++) {
        // Якщо знаходимо елемент, який більший за поточний найбільший, то оновлюємо maxIndex і maxValue
        if (sorted_arr[j] > maxValue) {
          maxIndex = j;
          maxValue = sorted_arr[j];
        }
      }
      // Після циклу ми знаємо, де знаходиться найбільший елемент в підмасиві
      // Міняємо його місцями з i-м елементом
      // Для цього нам потрібна допоміжна змінна, щоб не втратити значення
      let temp = sorted_arr[i]; // Зберігаємо значення i-го елемента
      sorted_arr[i] = maxValue; // Ставимо найбільший елемент на i-ту позицію
      sorted_arr[maxIndex] = temp; // Ставимо i-й елемент на місце найбільшого
    }
    return sorted_arr;    
}

let sorted_arr = sort_arr(arr);
console.log("Вихідний масив:", sorted_arr);
console.log("Найбільший серед від’ємних:", maxNegative);
console.log("Найменший серед додатних:", minPositive);

let arr_html = document.getElementById("arr");
arr_html.innerHTML = `<span>Початковий масив: ${arr.toString()};</span>`;

let sorted_html = document.getElementById("sorted_arr");
sorted_html.innerHTML = `<span>Відсортований масив: ${sorted_arr.toString()};</span>`;

let max_neg_html = document.getElementById("max-neg");
max_neg_html.innerHTML = `<span>Найбільше від'ємне: ${maxNegative.toString()};</span>`;

let min_pos_html = document.getElementById("min-pos");
min_pos_html.innerHTML = `<span>Найменше додаткове: ${minPositive.toString()};</span>`;
