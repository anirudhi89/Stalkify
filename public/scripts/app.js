var displayBox;

document.addEventListener('DOMContentLoaded', function () {
    displayBox = document.getElementById("display-box");
    displayBox.style.display='none';
    displayBox.setAttribute("display", "none")
});

submitBtn = document.getElementById("submit-btn");
displayBox = document.getElementById("display-box");
spdcKey = document.getElementById("spdc-key");


submitBtn.addEventListener("click", () => {

    const endpoint = `/getmusic?spdc=${spdcKey.value}`;
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayBox.style.display='block';
        displayBox.innerHTML = '';

        data.friends.forEach(friend => {
            const userContainer = document.createElement('div');
            userContainer.classList.add('user-container');

            const userImageContainer = document.createElement('div');
            userImageContainer.classList.add('user-image');
            const userImage = document.createElement('img');
            userImage.src = friend.user.imageUrl;
            userImageContainer.appendChild(userImage);

            const trackImageContainer = document.createElement('div');
            trackImageContainer.classList.add('track-image');
            const trackImage = document.createElement('img');
            trackImage.src = friend.track.imageUrl;
            trackImageContainer.appendChild(trackImage);

            const userInfo = document.createElement('div');
            userInfo.classList.add('user-info');
            userInfo.innerHTML = `<strong>${friend.user.name}</strong><br>is listening to:<br><strong>${friend.track.name}</strong>`;

            userContainer.appendChild(userImageContainer);
            userContainer.appendChild(userInfo);
            userContainer.appendChild(trackImageContainer);
            displayBox.appendChild(userContainer);
        });
    })
    .catch(error => {
        console.error(error);
        displayBox.innerText = "An error occurred while fetching data. Check if your sp_dc key is correct";
    });
});
