console.log("loaded")

// DOM ELEMENTS:

const submitBtn = document.getElementById("submit-btn");
const displayBox = document.getElementById("display-box");
const spdcKey = document.getElementById("spdc-key");

submitBtn.addEventListener("click", () => {
    const endpoint = `/getmusic?spdc=${spdcKey.value}`;
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(Object.keys(data.friends).length);
        displayBox.innerText = data.friends[Object.keys(data.friends).length-1].user.name;
        displayBox.innerText += data.friends[Object.keys(data.friends).length-1].track.name;
    })
    .catch(error => {
        console.error(error);
        displayBox.innerText = "An error occurred while fetching data.";
    });

});
