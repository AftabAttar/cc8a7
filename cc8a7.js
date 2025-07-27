function multiplyNumbers(a, b) {
  const product = Math.imul.apply(null, [a, b]);
  return product;
}

console.log(multiplyNumbers(5, 3));
console.log(multiplyNumbers(-2, 4));
