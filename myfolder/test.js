console.log("hello");

console.log(Math.ceil(5 / 2));

console.log(Array.from("satoshi"));
// ["s", "a", "t", "o", "s", "h", "i"];

const range = (s, e, length = e - s + 1) =>
  Array.from({ length }, (_, i) => s + i);

console.log(range(1, 3));

const numToArray = range(1, Math.ceil(5 / 2)).map((i) => ({
  params: { page: i.toString() },
}));
// [
//   { params: { page: "1" } },
//   { params: { page: "2" } },
//   { params: { page: "3" } },
// ];

