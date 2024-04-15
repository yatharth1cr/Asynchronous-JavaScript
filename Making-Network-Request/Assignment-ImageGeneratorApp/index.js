let button = document.querySelector("button");

function handleRandomImage() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.unsplash.com/photos/random/?client_id=vyPPnIwls6EN1dl7vdIRrzb8vWMc0pA90UxI2Jzpimw"
  );

  xhr.onload = function () {
    if (xhr.status === 200) {
      // Parse the JSON response
      const photoData = JSON.parse(xhr.responseText);

      // Access the photo URL (use the 'regular' size URL)
      const photoUrl = photoData.urls.regular;

      // Display the photo in your HTML document
      const imgElement = document.querySelector("img");
      imgElement.setAttribute("src", photoUrl);
      imgElement.setAttribute("alt", photoData.alt_description);

      // Append the img element to the document body
    } else {
      console.log("Error:", xhr.status, xhr.statusText);
    }
  };

  xhr.send();
}
button.addEventListener("click", handleRandomImage);
