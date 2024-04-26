#### 1. Write a basic implementation of Promise.all that accepts an array of promises and return another array with the data coming from all the promises. Make sure if any of the Promise gets rejected throw error. Only when all the promises are fulfilled resolve the promise.

```js
function promiseAll(arrayOfPromises) {
  return new Promise((resolve, reject) => {
    let arrayOfPromisesResult = [];
    arrayOfPromises.map((promise, index) => {
      promise.then((result) => {
        arrayOfPromisesResult.push(result);
        if (arrayOfPromisesResult.length === arrayOfPromises.length) {
          resolve(arrayOfPromisesResult);
        }
      });
    });
  });
}

// Test:
let times = [1, 2, 3, 4];
let timesPromise = times.map(
  (second) =>
    new Promise((res) => {
      setTimeout(() => res(Math.random()), second * 1000);
    })
);
promiseAll(timesPromise).then(console.log);
```

#### 2. Convert the code below to use promises to do the following.

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
// ANSWER
let saySomething = new Promise((resolve, reject) => {
  setTimeout(() => resolve("10 seconds passed"), 10 * 1000);
}).then(console.log);
```

#### 3. Make the code below log 1 and 2 rather than 2 and 1 using promises. You can only change one line of the code.

```js
console.log(2);
console.log(1);
// ANSWER
Promise.resolve.then(() => {
  console.log(1);
  console.log(2);
});
```

#### 4. Convert the data given below into a promise. Resolve it Immediately. Use .then to use the value and log it.

```js
const user = {
  name: "Arya Stark",
  house: "Stark",
  nickname: "No One",
};
// ANSWER
Promise.resolve(user).then(console.log);
```

#### 5. Create a function named loadImage that can be used as follow. Use the following event listeners load and error to load the image. You can also create the image element using new Image(). Resolve the promise when the image is loaded and reject it if something goes wrong.

```js
function loadImage(imgUrl) {
  return new Promise((resolve, reject) => {
    let img = new Image();

    // Event listener for successful image load img
    addEventListener("load", () => resolve(img));

    //Event listener for image load error img
    addEventListener("error", () => reject(img));

    //Set the image source after setting up event listeners
    img.src = imgUrl;
  });
}

loadImage("https://images.unsplash.com/photo-1614157510257-968fb5129989")
  .then((img) => {
    document.body.append(img);
    console.log(`w: ${img.width} | h: ${img.height}`);
  })
  .catch((err) => console.error(err));
```

#### 6.

> - `Create a function named getFirstName that returns a promise. When the promise is resolved it will return a value of {name: "Arya"}.

> - Create a function named getLastName that returns a promise. When the promise is resolved it will return a value of {name: "Stark"}.

> - Create another function named getFullName which returns a promise. And when the promise is resolved it will return the full name that you will get by resolving the promises from the above two functions.

```js
let getFirstName = function () {
  return new Promise((resolve, reject) => {
    resolve({ name: "Arya" });
  }).then((firstName) => {
    return firstName;
  });
};

let getLastName = function () {
  return new Promise((resolve, reject) => {
    resolve({ name: "Stark" });
  }).then((lastName) => {
    return lastName;
  });
};

function getFullName() {
  return Promise.all([getFirstName(), getLastName()]).then((results) => {
    let FullName = results[0].name + " " + results[1].name;
    return FullName;
  });
}

getFullName().then(console.log); // Arya Stark
```
