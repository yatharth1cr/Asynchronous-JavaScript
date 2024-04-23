// - Create four promises that resolves after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promises that it resolved with.

// const one = new Promise((res, rej) => {
//   setTimeout(() => res(1), 1000);
// });
// const two = new Promise((res, rej) => {
//   setTimeout(() => res(2), 2000);
// });
// const three = new Promise((res, rej) => {
//   setTimeout(() => res(3), 3000);
// });
// const four = new Promise((res, rej) => {
//   setTimeout(() => res(4), 4000);
// });

// let allPromise = Promise.all([one, two, three, four])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log(allPromise);

// - Create a list of 5 github usernames in an array and using `Promise.all` get access to the data of each user from github api. Log the number of followes of each users.

let githubUsername = [
  "yatharth1cr",
  "anish979828",
  "ashwanig3",
  "shubhamgiri70",
  "ritesh22201",
];

let usersData = Promise.all(
  githubUsername.map((user) => {
    return fetch(`https://api.github.com/users/${user}`, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((value) => console.log(value.followers));
  })
)
  .then((data) => {
    console.log(data);
    data.map((eachUser) => {
      console
        .log
        // `Number of followers of ${eachUser.login} :- ${eachUser.followers}`
        ();
    });
  })
  .catch((error) => console.log(error));

// OUTPUT
// Number of followers of yatharth1cr :- 2
// Number of followers of anish979828 :- 5
// Number of followers of ashwanig3 :- 27
// Number of followers of shubhamgiri70 :- 2
// Number of followers of ritesh22201 :- 16

// - Use `Promise.race` to see which API resolves faster from the given list of urls. Log the object you get from the promise that is resolved faster.

//   - https://random.dog/woof.json
//   - https://aws.random.cat/meow

let firstApi = fetch(`https://random.dog/woof.json`).then((res) => res.json());
let secondApi = fetch(`https://aws.random.cat/meow`).then((res) => res.json());

let racePromise = Promise.race([firstApi, secondApi]);
console.log(racePromise);

// - Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

const one = new Promise((res, rej) => {
  setTimeout(() => res(1), 1000);
});
const two = new Promise((res, rej) => {
  setTimeout(() => res(2), 2000);
});
const three = new Promise((res, rej) => {
  setTimeout(() => res(3), 3000);
});
const four = new Promise((res, rej) => {
  setTimeout(() => res(4), 4000);
});

let allPromise = Promise.all([one, two, three, four])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

let allSettledPromise = Promise.allSettled([one, two, three, four])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// - What will be the output of the following code snippet? How much time will it take for the promise to resolve.

Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Arya"), 1000);
  }),
  "Sam",
  { name: "John" },
]).then(console.log);

// OUTPUT
// "Arya"
// "Sam"
// { name: "John" }
