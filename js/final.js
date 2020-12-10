
function addingImages() {
    for(let i = 0; i < 5; i++){
        var image = document.createElement("img");
        image.setAttribute("src", "images/pic" + (i + 1) + ".jpg");
        image.setAttribute("alt", "This is Image " + (i +1));
        image.setAttribute("id", ("image" + (i + 1)));
        image.setAttribute("class", ("gallery"));
        image.addEventListener("mouseover", function(e) {
            
            let focusedImg = document.getElementById("focused-image");
            focusedImg.setAttribute("src", e.target.src);

        });
        document.querySelector(".images").appendChild(image);
    }
}






function handleEffectInput (e) {

    let textInput = document.querySelector("#effect");
    
    if(textInput.value === "blur") {
        console.log("success");
        changePic(e);
        textInput.value = "";
    }else {
        alert("Invalid effect");
        textInput.value = "";
    }
    
}


function changePic (e) {
    // Change the src of focused image to the blurry version

        var listSrc = [];
        let imgArray = document.querySelectorAll(".gallery");
        for (var i = 0; i < imgArray.length; i++){
            listSrc.push(imgArray[i].src);
        }

        var focusedImg = document.querySelector(".displayed-img");

        if(focusedImg.src == listSrc[0]){
            focusedImg.src = "images/pic1B.jpg";

        }if(focusedImg.src == listSrc[1]){
            focusedImg.src = "images/pic2B.jpg";

        }if(focusedImg.src == listSrc[2]){
            focusedImg.src = "images/pic3B.jpg";

        }if(focusedImg.src == listSrc[3]){
            focusedImg.src = "images/pic4B.jpg";

        }if(focusedImg.src == listSrc[4]){
            focusedImg.src = "images/pic5B.jpg";
        }

}



// Hide the Label and the Form at the bottom of the page on page load

window.addEventListener("load", function () {
    document.getElementById("footerid").classList.add("hidden");
});

// Add event listener to Image container 
// To make footer visible and update focused image

document.querySelector("#thumb-bar").addEventListener("mouseenter", function() {
    // Show footer when mouse on gallery
    document.getElementById("footerid").classList.remove("hidden");

})

// Dynamically add images to thumb bar
window.addEventListener("load", addingImages);

// Handle inputs for effects on focused image
document.querySelector("#submit-button").addEventListener("click", handleEffectInput);

