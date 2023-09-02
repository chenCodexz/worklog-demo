let x = {
  value: 1,
  valueOf() {
    return this.value++;
  },
};
if (x == 1 && x == 2 && x == 3) {
  console.log('success');
}
// let n = 1;
// Object.defineProperty(window, 'x', {
//   get: () => n++,
// });
// if (x === 1 && x === 2 && x === 3) {
//   console.log('success');
// }
