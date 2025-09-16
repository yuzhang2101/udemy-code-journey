// const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));

// console.log(123);

// //   .then((json) => console.log(json));

// console.log(response);

// response;

async function getTodos() {
  const test = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   test
  const data = await test.json();

  console.log(data);

  console.log(test);
  console.log(456);
  return 124;
}

const af = await getTodos();
console.log(af);

console.log("after getTodos");
