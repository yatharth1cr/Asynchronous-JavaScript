let data = fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=30")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Error Happend:${res.status}`);
    }
    console.log(res);
    return res.json();
  })
  .then((json) => {
    if (Array.isArray(json)) {
      console.log(json);
      renderUI(json);
    }
  })
  .catch((error) => {
    document.body.innerHTML = "";
    document.body.innerText = `Error fetching data: ${error}`;
    document.body.style.color = "red";
  });

let renderUI = function (data) {
  // Select the container where news cards will be appended
  let rootContainer = document.querySelector(".container");

  // Iterate through each article in the data array
  data.forEach((article) => {
    let cardRoot = document.createElement("div");
    cardRoot.classList.add("news-card");

    let img = document.createElement("img");
    img.src = article.imageUrl;
    img.alt = "News Image";

    let textRoot = document.createElement("div");

    let h2 = document.createElement("h2");
    h2.innerText = article.newsSite;

    let p = document.createElement("p");
    p.innerText = article.summary;

    let button = document.createElement("button");
    button.innerText = "Read More";

    textRoot.append(h2, p, button);
    cardRoot.append(img, textRoot);

    // Append the news card to the container
    rootContainer.appendChild(cardRoot);
  });
};

let select = document.getElementById("category-select");

select.addEventListener("change", handleSelectedOption);

function handleSelectedOption(event) {
  let selectedOption = event.target.value;

  // Ensure data is resolved before filtering
  data.then((articles) => {
    let filteredArticles = filterByNewsSite(articles, selectedOption); // Corrected function call
    clearUI();
    renderUI(filteredArticles);
  });
}

function filterByNewsSite(articles, newsSite) {
  // Check if articles is not undefined before filtering
  if (articles) {
    return articles.filter((article) => article.newsSite === newsSite);
  } else {
    return [];
  }
}

function clearUI() {
  let rootContainer = document.querySelector(".container");
  rootContainer.innerHTML = ""; // Remove all children elements
}
