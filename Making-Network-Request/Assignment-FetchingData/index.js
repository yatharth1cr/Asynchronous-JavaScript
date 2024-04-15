// profile
let input = document.querySelector("input");
let h3 = document.querySelector("h3");
let profileImg = document.querySelector(".profile");
let followers = document.querySelector(".followers");
let following = document.querySelector(".following");

// followers and following
let followersImg = document.querySelectorAll(".img-flwr");
let followingImg = document.querySelectorAll(".img-flwng");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/users/shubhamgiri70");
// Handle the response
xhr.onload = function () {
  if (xhr.status === 200) {
    // Parse the response as JSON
    let data = JSON.parse(xhr.response);
    // Update the UI with the user's profile information
    profileImg.setAttribute("src", data.avatar_url);
    h3.innerText = data.name;
    followers.innerText = `Followers: ${data.followers}`;
    following.innerText = `Following: ${data.following}`;

    // Handle followers and following data
    fetchFollowersData(data.followers_url);
    fetchFollowingData(data.following_url);
  } else {
    console.error("Failed to fetch GitHub user data:", xhr.statusText);
  }
};

// Handle any errors during the request
xhr.onerror = function () {
  console.error("An error occurred during the request.");
};

//send the initial request
xhr.send();

// xhrFollowersHandle
function xhrFollowersHandle(followersUrl) {
  let xhr2 = new XMLHttpRequest();
  xhr2.open("GET", followersUrl);
  xhr2.onload = function () {
    let followersUrlData = JSON.parse(xhr2.response);
    console.log(followersUrlData);
    followersImg.forEach((el) => {
      el.setAttribute("src", followersUrlData.avatar_url);
    });
  };
  xhr2.send();
}

// xhrFollowingHandle
function xhrFollowingHandle(followingUrl) {
  let xhr3 = new XMLHttpRequest();
  xhr3.open("GET", followingUrl);
  xhr3.onload = function () {
    let followingUrlData = JSON.parse(xhr3.response);
    console.log(followingUrlData);
  };
  xhr3.send();
}

// vyPPnIwls6EN1dl7vdIRrzb8vWMc0pA90UxI2Jzpimw
// https://api.unsplash.com/
// let fol = new XMLHttpRequest()
// undefined
// fol.open('GET','https://api.github.com/users/shubhamgiri70/following')
// undefined
// fol.send()
// undefined
// let d = JSON.parse(fol.response)
