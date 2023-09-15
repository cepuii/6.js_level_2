//  1. Найдите числа в массиве которые делятся на 3 без остатка

const arr = [90, 124, 55, 9213, 159, 225, 1543, 1545];
const devideArr = [];

for(let i = 0; i < arr.length; i++) {

    if(arr[i] % 3 === 0) {
        devideArr.push(arr[i]);
    }
}

//  2. Посчитайте финальную стоимость всех продуктов в корзине и выведите результат как переменную в консоль лог

const shoppingCart = [
  {
    name: 'Cheese',
    count: 4,
    pricePerItem: 100
    
  },
  {
    name: 'Water',
    count: 5,
    pricePerItem: 23
    
  },
  {
    name: 'Banana',
    count: 8,
    pricePerItem: 55
    
  },
  {
    name: 'Choccolate',
    count: 2,
    pricePerItem: 115
    
  }
];

let sum = 0;
for(let i = 0; i < shoppingCart.length; i++){
    sum += shoppingCart[i].count * shoppingCart[i].pricePerItem;
}
console.log(`Total: ${sum}`)

//3. Посчитайте сумму всех чисел внутри массива массивов. Присвойте переменной и выведете в консоль.

const arrs = [
  [100, 1230, 1293123, 1236478, 9816],
  [9932, 2123123, 1293123, 1203123, 1239],
  [12391, 1235, 1123994, 1203123, 5543243],
  [1203, 92346, 288, 12309, 5543243],
  [94324, 8236, 123, 86231, 8455322],
  [2340123, 172, 123, 321, 38421340],
]

let sumArr = 0;
for(let i = 0; i < arrs.length; i++){
    for(let j = 0; j < arrs[i].length; j++){
        sumArr += arrs[i][j];
    }
}
console.log(`Arrays' elements sum: ${sumArr}`)

//4. Добавить в массив uniqueArray только не повторяющиеся значения из arr

const arrString = ["php", "php", "css", "css",
  "script", "script", "html", "html", "java", "java", "go", "Python", "Python"
];
const uniqueArray = []

for(let i = 0; i < arrString.length; i++){
    if(!uniqueArray.includes(arrString[i])){
        uniqueArray.push(arrString[i])
    }
}
console.log(`Unique strings: ${uniqueArray}`)

//5. В объекте result должны быть свойства в которых ключ это элемент массива arr а значение - количество этих элементов в массиве arr

const names = ['Jane','Bob','Bob','Luci','Jane','Bob','Peter','Felix','Felix','Bob','Andrew'];
const result = {};

for(let i = 0; i < names.length; i++){
    result[names[i]] = result[names[i]] === undefined ? 1 : result[names[i]] + 1;
}
console.log(result);
