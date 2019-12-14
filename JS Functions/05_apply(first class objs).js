/* 
Реализуйте и экспортируйте по умолчанию функцию apply, которая принимает на вход три параметра:
  1. Количество раз, которое нужно применить функцию к аргументу (ряд последовательных вызовов, 
     где каждому следующему вызову передается аргумент, являющийся результатом предыдущего вызова функции;
  2. Функцию для применения
  3. Аргумент для применения 
*/

const apply = (count, term, arg) => (
  count === 0 ? arg : apply((count - 1), term, term(arg))
);

// apply testing
const args = [
  [0, Math.sqrt, 4],
  [1, Math.sqrt, 4],
  [2, Math.sqrt, 16],
  [3, Math.sqrt, 256],
  [1, v => v ** 2, 3],
  [5, v => v + 10, 3],
];
args.forEach((arg) => {
  console.log(`apply(${arg[0]}, ${arg[1]}, ${arg[2]}) = ${apply(arg[0], arg[1], arg[2])}`);
});
