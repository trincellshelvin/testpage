const myImage = document.querySelector("img");

myImage.onclick = ()=> {
    const mySrc =myImage.getAttribute("src");
    if (mySrc === "images/halloweencsrd.jpg") {
        myImage.setAttribute("src", "images/christmascard.jpg");
    } else {
        myImage.setAttribute("src", "images/halloweencard.jpg");
    }

};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("hi");

function setUserName(){
    const myName = prompt("Please enter your name");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")){
    setUserName();

} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
}