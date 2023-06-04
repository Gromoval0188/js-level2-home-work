const arr = [90, 124, 55, 9213, 159, 225, 1543, 1545];
const devideArr = [];
for (let i of arr) {
  if (i % 3 == 0) {
    devideArr.push(i);
  }
}
console.log(devideArr);


const shoppingCart = [
    {
      name: 'Cheese',
      count: 4,
      pricePerItem: 100,
      
    },
    {
      name: 'Water',
      count: 5,
      pricePerItem: 23,
      
    },
    {
      name: 'Banana',
      count: 8,
      pricePerItem: 55,
      
    },
    {
      name: 'Choccolate',
      count: 2,
      pricePerItem: 115,
      
    }
];
  
let sumPrice = 0;
for (let i of shoppingCart) {
sumPrice += i.pricePerItem * i.count;
}
  
console.log(`Total price: ${sumPrice}`)


const arr2 = [
    [100, 1230, 1293123, 1236478, 9816],
    [9932, 2123123, 1293123, 1203123, 1239],
    [12391, 1235, 1123994, 1203123, 5543243],
    [1203, 92346, 288, 12309, 5543243],
    [94324, 8236, 123, 86231, 8455322],
    [2340123, 172, 123, 321, 38421340],
];
  
let sum = 0;
for (let i of arr2) {
for (let k of i) sum += k;
}
console.log(`Total score: ${sum}`);


const arr3 = ["php", "php", "css", "css",
  "script", "script", "html", "html", "java", "java", "go", "Python", "Python"
];
const uniqueArray = []
for (let i of arr3) {
    if (!uniqueArray.includes(i)) {
      uniqueArray.push(i);
    }
}
console.log(uniqueArray);



const arr4 = ['Jane','Bob','Bob','Luci','Jane','Bob','Peter','Felix','Felix','Bob','Andrew'];
const result = {};
for (let y of arr4) {
    if (Object.keys(result).includes(y)) {
      result[y] += 1;
    } else {
      result[y] = 1;
    }
}
console.log(result);