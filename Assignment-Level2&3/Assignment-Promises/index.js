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

getFullName().then(console.log);
