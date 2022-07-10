function factorialize(num) {
  let result = 1;
  if (num <= 0) return 1;
  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
}

factorialize(5);