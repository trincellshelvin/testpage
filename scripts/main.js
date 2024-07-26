const myImage = document.querySelector("img");

myImage.onclick = ()=> {
    const mySrc =myImage.getAttribute("src");
    if (mySrc === "images/halloweencsrd.jpg") {
        myImage.setAttribute("src", "images/christmascard.jpg");
    } else {
        myImage.setAttribute("src", "images/halloweencard.jpg");
    }

};