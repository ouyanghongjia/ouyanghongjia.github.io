const myImage = document.querySelector('img');
myImage.onclick = function() {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === "images/Mozilla.png") {
        myImage.setAttribute('src', 'images/Mozilla-2.png');
    } else {
        myImage.setAttribute('src', 'images/Mozilla.png');
    }

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt("Please enter your name:");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mizilla is cool, " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mizilla is cool, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}