// Строгий режим
"use strict"

/* Задачі Євгена */
/*
Задача №1
Що потрапить в консоль ?
let someVar = 0;
++someVar;
if (someVar) {
  console.log(someVar);
}
someVar = 0, збільшуємо його на 1, перевіряємо чи є у нас someVar
Він у нас створений до перевірки if, область видимості правильна, консаоль виведе - 1

*/

/*
Задача №2
За допомогою циклу FOR виведіть в консоль 10 рядків:
Пункт №1
Пункт №2
і т.д.
*/
for (let i = 1; i <= 10; i++) {
  console.log(`Пункт №${i}`);
}

/*
Задача №3
Що потрапить в консоль ?
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
  console.log('000');
}
2 * 20 <= 10 -> 40 <= 10 --> false
30 / 2 < 5 -> 15 < 5 --> false
10 <= "10" -> Нестроге порівняння числа і рядка, тому йде перетворення числа в рядок і порівння рядків "10" <= "10" --> True
20 === "20" -> Строге порівння, тому порівнює і тип даних, типи різні(number та string) --> false
false || false && true || false
false && true дає в результаті false
false || false || false --> Вибір з false, тому результат false, умова if не спрацює, 
якщо модифікувати її і додати else, вивід console.log буде в else
*/

/*
Задача №4
Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
Функція не має повертати NaN, Infinite або помилку
*/
function calcDivideNumbers(a, b) {
  // Перевірка, чи a та b є числами
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Введіть обидва числа");
  }
  // Перевірка, чи b не є нуль
  if (b === 0) {
    throw new Error("Ділення на нуль неможливе");
  }
  // Виконання ділення та повернення результату
  let result = a / b;
  // Перевірка на NaN або Infinity
  if (!Number.isFinite(result)) {
    throw new Error("Результат невизначений!");
  }
  return `Результат ділення ${a} та ${b}: ${result}`;
}
try {
  console.log(calcDivideNumbers(10, 2));
  console.log(calcDivideNumbers(5, 0));
} catch (error) {
  console.error(error.message);
}

/*
Задача №5
Створіть масив даних - 5 елементів, один з яких число 10
Обробіть масив за допомогою методу перебору
Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль
*/
// Створення масиву
let dataArray = [5, 8, 10, "abc", 12];
// Перебір масиву
dataArray.forEach(element => {
  // Перевірка, чи поточний елемент є числом
  if (typeof element === 'number') {
    // Перевірка, чи елемент дорівнює числу 10
    if (element === 10) {
      console.log(`Знайдено число 10 в масиві: ${element}`);
    } else {
      // Виведення всіх чисел, які не дорівнюють 10
      console.log(`Елемент масиву не дорівнює числу 10: ${element}`);
    }
  } else {
    console.log(`Елемент масиву не є числом: ${element}`);
  }
});
//Задачки
/*
№1 - Вхідні дані: Кількість ярусів n (0 ≤ n ≤ 1000) на дереві
Вивести кількість літрів води для поливу цього дерева.
Відомо, що на 1 листок йде 1 літр води, верхній ярус містить 1 листок, ярус 2 - 2 листки і кожен наступний ярус має +2 листка
*/
// У функцію приймає значення n
function calcWaterForTree(n) {
  // Перевіряємо аби n було більше 0 та менше 1000 по умові
  if (n < 0 || n > 1000) {
    return "Некоректні вхідні дані";
  }
  // Встановлюємо лічильник в 1(умова вказує на те, що 1 листок завжди є)
  let totalWater = 1;
  for (let level = 1; level <= n; level++) {
    totalWater += level * 2; // Кількість листків на кожному ярусі = кількість * 2
  }
  // Вивід
  return totalWater;
}
let resultWaterForThree = calcWaterForTree(3);
console.log(resultWaterForThree);

/*
№2 - Одне натуральне число n (1 ≤ n ≤ 10^9). Вивести кількість перетворень числа n до отримання 1
  (якщо число парне, то розділимо його на 2
  якщо непарне, додамо 1)
  Наприклад, з числа 11 отримується число 12, потім 6, 3, 4, 2 і нарешті 1. 
  Таким чином, для отримання 1 з 11 потрібно виконати 6 перетворень.
*/
function calcTransformations(n) {
  if (n < 1 || n > 1000000000) {
    return "Некоректні вхідні дані";
  }
  let transformations = 0;
  //Поки число не буде = 1
  while (n !== 1) {
    //Перевірка чи число ділиться націло на 2
    if (n % 2 === 0) {
      // Якщо число парне, розділимо його на 2
      n /= 2;
    } else {
      // Якщо число непарне, додамо 1
      n += 1;
    }
    //Збільшуємо лічильник
    transformations++;
  }
  //Вивід
  return transformations;
}
let resultTransformationsto = calcTransformations(11);
console.log(resultTransformationsto); // Виведе 6

/*
№3 Одне ціле число n (1 ≤ n ≤ 100). Вивести заповнену матрицю у вигляді n рядків по n цілих чисел у кожному, в якій 
у лівому верхньому куті знаходиться число 1;
далі числа розміщуються "змійкою", тобто за зростанням зліва направо в непарних рядках, і справа наліво - у парних;.
при 3 вивід буде
1 2 3
6 5 4
7 8 9
*/
function checkMatrixValue(n) {
  if (n < 1 || n > 100) {
    return "Некоректні вхідні дані";
  }
  // Створення пустої матриції розміром n*n
  let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let currentNumber = 1;
  // Перебираємо рядок матриці
  for (let row = 0; row < n; row++) {
    //Якщо рядок парний
    if (row % 2 === 0) {
      // Змійка в рядках з парним номером(зліва направо)
      for (let col = 0; col < n; col++) {
        // Присвоюємо елементу поточне значення
        matrix[row][col] = currentNumber++;
      }
    } else {
      // Змійка в рядках з непарним номером(напрямок змінюємо)
      for (let col = n - 1; col >= 0; col--) {
        matrix[row][col] = currentNumber++;
      }
    }
  }
  return matrix;
}
let resultFillMatrix = checkMatrixValue(4);
console.log(resultFillMatrix);

/*
№3 Рядок, який складається лише з 0 і 1, який представляє собою кодовану послідовність бітів.
Вивести результат кодування.
Якщо значення попереднього біта заданої послідовності відрізняється від значення поточного біта, 
що кодується, в результуючу послідовність записується 1
Якщо значення бітів не відрізняються, то записується 0
При 10010111 має бути 11011100
*/
function getDecodeBinarySequence(sequence) {
  // Декодова послідовність
  let decodedSequence = "";
  // Збереження попереднього біта
  let previousBit = "0";
  // Проходимось через кожен біт у нашій послідовності
  for (let bit of sequence) {
    // Декодова послідовність отримує 1, якщо поточний біт відрізняється від минулого
    // інакше отримує 0
    decodedSequence += bit !== previousBit ? "1" : "0";
    // Оновлюємо значення поточного біту
    previousBit = bit;
  }
  return decodedSequence;
}

// Приклад виклику функції з кодованою послідовністю
let result = getDecodeBinarySequence("10010111");
console.log(result);

/* №4 Один рядок, який містить єдине ціле число N.
Виведіть всі шукані дроби по одному в рядку, відсортовані у порядку зростання за зразком, поданим у прикладі вихідних даних.
Вхідні - 5
Вихідні 
0/1
1/5
1/4
1/3
2/5
1/2
3/5
2/3
3/4
4/5
1/1
*/
function generateFractions(n) {
  if (n < 1 || n > 160) {
    return "Некоректне значення n. Введіть число від 1 до 160.";
  }
  // Масив зберігання дробів
  let fractions = [];
  //Перевіряємо кожен можливе значення чисельника
  for (let denominator = 1; denominator <= n; denominator++) {
    // та знаменника
    for (let numerator = 0; numerator <= denominator; numerator++) {
      // Викликаємо gcd, перевірка чи є дріб правильним і нескоротнім
      if (gcd(numerator, denominator) === 1) {
        // Додаємо в наш масив
        fractions.push({ numerator, denominator });
      }
    }
  }
  // Сортування масиву за порядком
  fractions.sort((a, b) => a.numerator * b.denominator - b.numerator * a.denominator);
  // Повертаємо масив дробів(представляємо їх у вигляді дробів)
  return fractions.map(fraction => `${fraction.numerator}/${fraction.denominator}`);
}
// Функція для знаходження найбільшого спільного дільника
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
//Задаємо число і виводимо в консоль
let resultgenerate = generateFractions(5);
console.log(resultgenerate.join('\n'));

/*
№5 Отримати текст із блоку з класом .title. Розбити текст на символи, вивести символи в консоль і обгорнутти символи в span
*/
// Отримуємо текст із блоку .title
const titleElement = document.querySelector('.title');
// Зберігаємо текст
const text = titleElement.textContent;
// Розбиваємо текст на символи
const characters = text.split('');
// Очищуємо текст у блоку
titleElement.textContent = '';
// Вивести символи в консоль та обгорнути їх в span
characters.forEach(char => {
  // Вивід в консоль
  console.log(char);
  // Створюємо елемент <span></span>
  const spanElement = document.createElement('span');
  // Додаємо символ в кожний <span></span>
  spanElement.textContent = char;
  // Виводимо обгорнутий символ в <span></span> в .title
  titleElement.appendChild(spanElement);
});

/* №6 При кліку на кнопку створити новий рандомний текст і додати його до сторінки. */
document.getElementById('createElement').addEventListener('click', function () {
  // Створення нового елементу параграфу
  const newElement = document.createElement('p');
  // Генерація рандомного тексту(виклик функції, обмеження 32 символи)
  const randomText = generateRandomText(32);
  // Присвоєння тексту
  newElement.textContent = randomText;
  // Додання тексту до частини документа
  document.body.appendChild(newElement);
  // Відображення в created-text
  document.querySelector('.created-text').textContent += randomText + '\n';
});

// Функція генерації рандомного тексту
function generateRandomText(maxLength) {
  // Всі допустимі символи
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  // Зберігання тексту
  let randomText = '';
  // Випадкова довжина тексту, максимальна maxLength = значення
  const textLength = Math.ceil(Math.random() * maxLength);
  // Генеруєме текст через цикл
  for (let i = 0; i < textLength; i++) {
    // Випадковий індекс символу зі строки characters
    const randomIndex = Math.floor(Math.random() * characters.length);
    // Додавання випадкового символу до згенерованого тексту
    randomText += characters.charAt(randomIndex);
  }
  // Повертаємо текст
  return randomText;
}

/*
№7
Створіть простий "додавач завдань" – форму для вводу тексту та кнопку "Додати". 
Зберігайте введені завдання в localStorage та виводьте їх на сторінці при завантаженні.
Також додайте до кожного списку кнопку видалення, яка буде видаляти дані із localStorage
*/
function addTask(event) {
  event.preventDefault();
  // Отримуємо значення з текстового поля
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value;
  if (taskText.trim() !== '') {
    // Створюємо новий елемент списку
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    // Створюємо кнопку видалення
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Видалити';
    deleteButton.addEventListener('click', function () {
      // Видаляємо відповідний елемент при кліку
      taskList.removeChild(newTask);
      // Зберігаємо завдання в localStorage
      saveTasksToLocalStorage();
    });
    // Додаємо кнопку видалення до елемента списку
    newTask.appendChild(deleteButton);
    // Додаємо завдання до списку
    taskList.appendChild(newTask);
    // Зберігаємо завдання в localStorage
    saveTasksToLocalStorage();
    // Очищаємо поле вводу
    taskInput.value = '';
  }
}
// Функція для збереження завдань в localStorage
function saveTasksToLocalStorage() {
  const taskList = document.getElementById('taskList');
  const tasks = Array.from(taskList.children).map(task => task.textContent);
  // Зберігаємо завдання в localStorage у вигляді рядка JSON
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
// Функція для завантаження завдань з localStorage при завантаженні сторінки
function loadTasksFromLocalStorage() {
  const taskList = document.getElementById('taskList');
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    // Розпаковуємо рядок JSON та додаємо завдання до списку
    const tasks = JSON.parse(savedTasks);
    tasks.forEach(taskText => {
      const newTask = document.createElement('li');
      newTask.textContent = taskText;
      // Створюємо кнопку видалення
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Видалити';
      deleteButton.addEventListener('click', function () {
        // Видаляємо відповідний елемент при кліку
        taskList.removeChild(newTask);
        // Зберігаємо завдання в localStorage
        saveTasksToLocalStorage();
      });
      // Додаємо кнопку видалення до елемента списку
      newTask.appendChild(deleteButton);
      // Додаємо завдання до списку
      taskList.appendChild(newTask);
    });
  }
}

// Додаємо подію submit до форми
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', addTask);
// Завантажуємо завдання при завантаженні сторінки
loadTasksFromLocalStorage();