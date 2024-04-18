#### 1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using setTimeout. Print the contents of the promise after it has been resolved by passing console.log to .then

```js
new Promise((resolve, reject) => {
  setTimeout(resolve, 1000);
}).then(() => {
  console.log("Promise Resolved!");
});
```

#### 2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

```js
new Promise((resolve, reject) => {
  setTimeout(reject, 1000);
}).catch(() => {
  console.log("Rejected Promise!");
});
```

#### 3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log messgae `Promise Settled!`.

```js
new Promise((resolve, reject) => {
  reject();
})
  .catch(() => {
    console.log("Rejected Promise!");
  })
  .finally(() => {
    console.log("Promise Settled!");
  });
```

#### 4. What will be the `output` of the code below.

```js
console.log("A");

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log("B"), 0);
// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log("C"));
console.log("D");

OUTPUT:-
//A
//D
//C
//B
```

#### 5. This challenge we'll chain promises together using `.then` Create two variables: `firstPromise` and `secondPromise`.

#### Set `secondPromise` to be a promise that resolves to "Second!". Set `firstPromise` to be a promise that resolves to `secondPromise`. Call the firstPromise with a `.then`, which will return the secondPromise promise. Then print the contents of the promise after it has been resolved by passing `console.log` to `.then

```js
let secondPromise = Promise.resolve("Second");

let firstPromise = Promise.resolve(secondPromise);

firstPromise.then((value) => {
  console.log(value);
});
```

6. Write a funtion named `wait` that accepts `time` in ms and executes the function after the given time.

```js
function wait(time) {
  setTimeout(() => {
    console.log(`${time} executed`);
  }, time);
}
// wait(2000);
// wait(3000);
// wait(4000);
// wait(5000);
```
