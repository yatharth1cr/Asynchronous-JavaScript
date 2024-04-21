// Display loading message
document.body.innerHTML = "<h3>Loading...</h3>";

// Fetch data and render UI
const fetchData = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    // Remove loading message
    document.body.innerHTML = "";
    renderUI(data);
  })
  .catch((error) => console.log(error));

console.log(fetchData);

// Function to render UI
const renderUI = function (data) {
  let root = document.createElement("div");
  root.classList.add("container");

  data.forEach((card) => {
    let cardRoot = document.createElement("div");
    cardRoot.classList.add("card-container");

    let title = document.createElement("h2");
    title.innerText = card.title;

    let description = document.createElement("p");
    description.innerText = card.body;

    let btn = document.createElement("button");
    btn.innerText = "X";

    cardRoot.append(title, description, btn);
    root.append(cardRoot);

    // Add event listener to the button to delete its parent card container
    btn.addEventListener("click", () => {
      cardRoot.remove(); // Remove the card container when the button is clicked
    });
  });
  document.body.append(root);
};
