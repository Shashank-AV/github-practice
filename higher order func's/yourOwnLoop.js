function loop(value, test, update, body) {
  for (let n = value; test(n); n = update(n)) {
    body(n);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
