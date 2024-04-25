#### What are the different states of promises. Give an example of each promise state.

> ASNWER:-]
>
> - Promise has two different states Pending state and Settled state
> - Inside Settled state there is two states Fullfilled state and Rejected State

```js
// Pending
let initial = new Promise((resolve, reject) => {});

// Settled
// Fullfilled state
let fullfilled = new Promise((resolve, reject) => {
  resolve(100);
});
// Rejected State
let rejected = new Promise((resolve, reject) => {
  reject("Something went wrong");
});
```

#### What are the problems with the callback pattern. Give one example of a callback pattern.

> ASNWER:-]
>
> - the problem with callback pattern is that if sometime we call the callback function multiple time for just checking some feature and all then it will called multiple times.

```js
function wait(cb) {
  setTimeout(cb, 3000);
  setTimeout(cb, 3000);
  setTimeout(cb, 3000);
}
wait(() => {
  console.log("Hello Callback");
});
// OUTPUT
```

#### What are the advantages of using promises over callback. Give one example of using a promise over callback.

> ASNWER:-]
>
> - when we use Promise it has two parameter resolve and reject and it will only resolve once.
> - if by mistake we call the function multiple time there is no issue in Promise because it will resolved or rejected once

```js
function waitPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
    setTimeout(reject, 3000);
    setTimeout(resolve, 3000);
  });
}
waitPromise().then(() => {
  console.log("Hello Promise");
});
```

#### What are methods available on a promise object. Give an example of each method.

> ASNWER:-]
>
> - There are the methods available on a promise object:;
>   1. then
>   2. catch
>   3. finally

```js
// then method is called when Promise will resolved
function methods() {
  return new Promise((res, rej) => {
    res();
  });
}
methods
  .then(() => {
    console.log("Resolved");
  })
  .finally(() => {
    console.log("Resolved OR Rejected");
  });

// catch method is called when Promise will rejected
function methods() {
  return new Promise((res, rej) => {
    rej();
  });
}
methods
  .catch(() => {
    console.log("Rejected");
  })
  .finally(() => {
    console.log("Resolved OR Rejected");
  });
```

#### List all the static methods that can be used on the Promise constructor. Give an example of each method.

> ANSWER:-]
>
> the static methods that can be used on the Promise constructor
>
> 1. all
> 2. race
>
> - Promise.all it will return all the promises that is resolved first
> - Promise.race it will return the promise that is resolved first

```js
// Using Promise.all() to wait for all promises to resolve
let promise1 = new Promise((res, rej) => {
  settimout(() => {
    res("Promise1 Resolved");
  }, 1000);
});

let promise2 = new Promise((res, rej) => {
  settimout(() => {
    res("Promise2 Resolved");
  }, 1000);
});

Promise.all([promise1, promise2])
  .then((results) => {
    console.log("All promises resolved", results);
  })
  .catch((error) => {
    console.log("At least one promise rejected:", error);
  });

// Using Promise.race() to get the result of the first resolved promise
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved after 2 seconds");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved after 1 second");
  }, 1000);
});

Promise.race([promise1, promise2])
  .then((result) => {
    console.log("First promise resolved:", result);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });
```

#### What are the types of error that get handled by .catch.

> ANSWER:
>
> - when Promise will not throw an error then we will use if and else condition to throw an error

#### How do you handle the error while fetching data from a route that is not available.

```js

```
