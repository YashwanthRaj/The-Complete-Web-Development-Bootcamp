// Code for changing the color of h1 on button click using native javascript

// let buttonClickMe = document.querySe lector("button");
// buttonClickMe.addEventListener("click", function () {
//     if (document.querySelector("h1").classList.contains("h1-clicked")) {
//         document.querySelector("h1").classList.remove("h1-clicked");
//     } else {
//         document.querySelector("h1").classList.add("h1-clicked");
//     }
// })

// Using jQuery to change the color of h1
// $("h1").css("color", "red");

// Animations using jQuery
$("button").on("click", function () {
    // $("h1").fadeToggle();
    // $("h1").slideToggle();
    // $("h1").animate({margin: "20%"})
    $("h1").slideUp().slideDown().animate({opacity: "0.5"});
})
