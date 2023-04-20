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
        for (let i = 0; i < Object.keys(data.friends).length; i++) {
            displayBox.innerText += data.friends[i].user.name;
            displayBox.innerText += " is listening to: ";
            displayBox.innerText += " " + data.friends[i].track.name;
            displayBox.innerText += "\n";
        }
    })
    .catch(error => {
        console.error(error);
        displayBox.innerText = "An error occurred while fetching data. Check if your sp_dc key is correct";
    });

});
