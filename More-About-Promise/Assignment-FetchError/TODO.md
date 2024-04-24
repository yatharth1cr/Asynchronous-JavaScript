#### What are the different states of promises. Give an example of each promise state.

```js
- Promise has two different states Pending state and Settled state
- Inside Settled state there is two states Fullfilled state and Rejected State
// Pending
let initial = new Promise((resolve,reject)=>{})

// Settled
// Fullfilled state
let fullfilled = new Promise((resolve,reject)=>{
    resolve(100)
})
// Rejected State
let rejected = new Promise((resolve,reject)=>{
    reject('Something went wrong')
})
```

#### What are the problems with the callback pattern. Give one example of a callback pattern.

```js

```

#### What are the advantages of using promises over callback. Give one example of using a promise over callback.

```js

```

#### What are methods available on a promise object. Give an example of each method.

```js

```

#### List all the static methods that can be used on the Promise constructor. Give an example of each method.

```js

```

#### What are the types of error that get handled by .catch.

```js

```

#### How do you handle the error while fetching data from a route that is not available.

```js

```
