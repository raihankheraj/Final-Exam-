
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
        changePic();
        textInput.value = "";
    }else {
        alert("Invalid effect");
        textInput.value = "";
    }
    
}


function changePic () {
    // Change the src of focsued image to the blurry version


        let focusedImg = document.getElementById("focused-image");
        let originalSrc = focusedImg.getAttribute("src");
        let ogSrcFirstPart = originalSrc.slice(0, 139);
        let ogSrcSecondPart = originalSrc.slice(139);
        console.log(originalSrc);
        focusedImg.setAttribute("src", ogSrcFirstPart + "B" + ogSrcSecondPart);

       

        
    
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

