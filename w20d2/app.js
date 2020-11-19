const data = {
  "Post-1": {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita etcum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt remeveniet architecto",
  },
  "Post-2": {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae eadolore sneque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non  debitis possimus qui neque nisi nulla",
  },
  "Post-3": {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  "Post-4": {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
};
// const data = {
//   name: "Lakha",
//   lastName: "Saini",
// };
// const customIterator = (data) => {
//   return {
//     [Symbol.iterator]: function () {
//       const keys = Object.keys(data);
//       let count = 0;
//       return {
//         next: function () {
//           while (count < keys.length) {
//             obj = { value: data[keys[count]], done: false };
//             count++;
//             return obj;
//           }
//           return { value: "undefined", done: true };
//         },
//       };
//     },
//   };
// };
// for (let i of customIterator(data)) {
//   //   console.log(i);
//   console.log(`Post Id ${i.id} Title ${i.title}`);
// }
// customIterator(data)[Symbol.iterator]().next().value;

function* gen(data) {
  const keys = Object.keys(data);
  let count = 0;
  while (count < keys.length) {
    yield data[keys[count]];
    count++;
  }
  return;
}

let customGen = gen(data);
console.log(customGen.next().value);
console.log(customGen.next().value);
console.log(customGen.next().value);
console.log(customGen.next().value);
console.log(customGen.next());
