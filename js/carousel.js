//external javascript file could not render the carousel as it was not accessing
//the class of the slide. Moved the code to be inline on index.html


// let i = 0;
// let time = 4000;

// //change image
// function changeImg(){
//     for(let x = 0; x < sliderImages.length; x++){
//         sliderImages[x].style.display = "none";
//     }
//     i++;
//     if(i > sliderImages.length) {i = 1}
//     sliderImages[i - 1].style.display = "block";
//     setTimeout("changeImg()", time);
// }

// window.onload = changeImg;

// let sliderImages = document.querySelectorAll(".slide"),
//     arrowLeft = document.querySelector("#arrow-left"),
//     arrowRight = document.querySelector("#arrow-right"),
//     current = 0;

// // Clear all images
// function reset() {
//     for (let i = 0; i < sliderImages.length; i++) {
//         sliderImages[i].style.display = "none";
//     }
// }

// // Init slider
// function startSlide() {
//     reset();
//     sliderImages[0].style.display = "block";
// }

// // Show prev
// function slideLeft() {
//     reset();
//     sliderImages[current - 1].style.display = "block";
//     current--;
// }

// // Show next
// function slideRight() {
//     reset();
//     sliderImages[current + 1].style.display = "block";
//     current++;
// }

// // Left arrow click
// arrowLeft.addEventListener("click", function() {
//     if (current === 0) {
//         current = sliderImages.length;
//     }
//     slideLeft();
// });

// // Right arrow click
// arrowRight.addEventListener("click", function() {
//     if (current === sliderImages.length - 1) {
//         current = -1;
//     }
//     slideRight();
// });

// startSlide();
