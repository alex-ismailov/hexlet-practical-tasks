/* Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив,
состоящий из массивов-пар и возвращает объект, полученный из этих пар.

Примечания
Если при конструировании объекта попадаются совпадающие ключи, то берётся ключ из последнего массива-пары:

fromPairs([['cat', 5], ['dog', 6], ['cat', 11]]
// → { 'dog': 6, 'cat': 11 }
Примеры
fromPairs([['fred', 30], ['barney', 40]]);
// → { 'fred': 30, 'barney': 40 } */

const fromPairs = (pairs) => pairs.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

export default fromPairs;

// console.log(fromPairs([['cat', 5], ['dog', 6], ['cat', 11]]));
// → { 'dog': 6, 'cat': 11 }

// console.log(fromPairs([['fred', 30], ['barney', 40]]));
// → { 'fred': 30, 'barney': 40 } */
