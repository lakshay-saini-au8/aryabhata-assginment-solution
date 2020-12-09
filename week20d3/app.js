/*
1. Fetch the data from http://jsonplaceholder.typicode.com/comments
2. Create a new array but each object should contain only postId, body
3. Create a filtered array with respect to the body’s character limit to less than or
equal to 50 characters.
4. Try to analyse the data, by giving a count of posts with respect to post ID.

*/

const data = fetch("http://jsonplaceholder.typicode.com/comments");
data
  .then((res) => res.json())
  .then((data) => {
    const newArr = data
      .filter((item) => item.body.length <= 100)
      .map((item) => {
        return { postId: item.postId, body: item.body };
      });
    console.log(newArr);
  });

const data = [1, 2, 3, 4, 5];
const newArr = data.map((item) => item * item);
const newArr2 = data.filter((item) => item === 2);
console.log(newArr);
console.log(newArr2);

// # 2
// # 5 3
// # 1 2 3 4 5
// # 20 18
// # 1 2 3 4 5
