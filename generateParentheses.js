function generateParenthesis(n) {
  const result = [];

  function backtrack(current, open, close) {
    if (open === 0 && close === 0) {
      result.push(current);
      return;
    }

    if (open > 0) {
      backtrack(current + "(", open - 1, close);
    }

    if (close > open) {
      backtrack(current + ")", open, close - 1);
    }
  }

  backtrack("", n, n);
  return result;
}

console.log(generateParenthesis(3));
