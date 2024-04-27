const activeElement = document.querySelector(".houses");
const loader = document.getElementById("loader"); // Loader element

// Show loader
loader.style.display = "block";

// Fetch data and create UI
let fetchedData;
fetch(
  `https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json`
)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  })
  .then((data) => {
    console.log("Fetched data:", data); // Log the entire fetched data

    fetchedData = data; // Assign data to fetchedData variable

    // This allows us to create the UI using a single array of people rather than having to handle each house separately.
    let peoples = data.houses.reduce((acc, el) => {
      acc = acc.concat(el.people);
      return acc;
    }, []);

    createUI(peoples);
    activeElement.addEventListener("click", handleActiveElement);

    // Hide loader after data is fetched and UI is created
    loader.style.display = "none";
  })
  .catch((error) => {
    console.log("Error fetching data", error);
    const root = document.getElementById("characters-list");
    root.innerHTML = `<p>Error fetching data: ${error}</p>`;
    root.style.color = "red";
    root.style.fontSize = "1.5rem";
    root.style.backgroundColor = "#fff";

    // Hide loader in case of error
    loader.style.display = "none";
  });

// Function to create UI
function createUI(data = []) {
  const root = document.getElementById("characters-list");
  root.innerHTML = ""; // Clear existing content

  data.forEach((character) => {
    const listItem = document.createElement("li");
    listItem.classList.add("box");

    const image = document.createElement("img");
    image.src = character.image;
    image.classList.add("card");

    const name = document.createElement("h2");
    name.textContent = character.name;
    name.classList.add("card");

    const description = document.createElement("p");
    description.textContent = character.description;

    const link = document.createElement("a");
    link.href = character.wikiLink;
    link.innerHTML = "<button>LEARN MORE!</button>";

    listItem.appendChild(image);
    listItem.appendChild(name);
    listItem.appendChild(description);
    listItem.appendChild(link);

    root.appendChild(listItem);
  });
}

// Event handler for active element
function handleActiveElement(event) {
  // Check if the clicked element is an LI element
  if (event.target.tagName === "LI") {
    // Remove 'active' class from all 'LI' elements within '.houses'
    activeElement.querySelectorAll("li").forEach((item) => {
      item.classList.remove("active");
    });
    // Add 'active' class to the clicked 'LI' element
    event.target.classList.add("active");
    const houseName = event.target.innerText;
    // Filter the data based on the clicked house name
    const selectedHouse = fetchedData.houses.find(
      (house) => house.name === houseName
    );
    if (selectedHouse) {
      console.log(selectedHouse);
      // Clear existing characters list
      const root = document.getElementById("characters-list");
      root.innerHTML = "";

      // Render characters for the selected house
      createUI(selectedHouse.people);
    }
  }
}
