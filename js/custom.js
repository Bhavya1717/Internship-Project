// navigation  menu js
function openNav() {
    $("#myNav").addClass("menu_width");
    $(".menu_btn-style").fadeIn();
}

function closeNav() {
    $("#myNav").removeClass("menu_width");
    $(".menu_btn-style").fadeOut();
}

var imageCarouselInterval; // Declare a variable to hold the interval
var isCarouselRunning = false; // A variable to keep track of whether the carousel is running

function stopImageCarousel() {
    clearInterval(imageCarouselInterval); // Clear the interval to stop automatic sliding
    isCarouselRunning = false; // Set the flag to false to indicate that the carousel is not running
}

function startImageCarousel() {
    imageCarouselInterval = setInterval(function () {
        // ... Your code to change carousel items
    }, 3000); // Change image every 3 seconds (adjust as needed)
    isCarouselRunning = true; // Set the flag to true to indicate that the carousel is running
}

document.addEventListener("DOMContentLoaded", function () {
    var readMoreLinks = document.querySelectorAll(".read-more-link");

    readMoreLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default link behavior
            var detailContent = this.parentElement;
            var additionalContent = detailContent.querySelector(".additional-content");

            if (detailContent.classList.contains("expanded")) {
                detailContent.classList.remove("expanded");
                additionalContent.style.display = "none";
                this.textContent = "Read more";
                stopImageCarousel(); // Stop the carousel when the user clicks "Read more"
            } else {
                detailContent.classList.add("expanded");
                additionalContent.style.display = "block";
                this.textContent = "Read less";
                startImageCarousel(); // Start the carousel when the user clicks "Read less"
            }
        });
    });
});

// get current year

function displayYear() {
    var d = new Date();
    var currentYear = d.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
displayYear();



//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


// slider carousel control


$('.slider_btn_prev').on('click', function (e) {
    e.preventDefault()
    $('.slider_text_carousel').carousel('prev')
    $('.slider_image_carousel').carousel('prev')
})


$('.slider_btn_next').on('click', function (e) {
    e.preventDefault()
    $('.slider_text_carousel').carousel('next')
    $('.slider_image_carousel').carousel('next')
})


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Assuming you have a close button element with class "closebtn"
var closeBtn = document.querySelector(".closebtn");

closeBtn.addEventListener("click", function() {
    var alert = document.querySelector(".alert");
    alert.classList.remove("show");
});

function CallUSNow() {
    var phoneNumber = document.getElementById("call_button").getAttribute("data-phone");
    var alert = document.querySelector(".alert");
    
    navigator.clipboard.writeText(phoneNumber)
        .then(function() {
            alert.classList.add("show"); // Add the 'show' class to trigger transition
            setTimeout(function() {
                alert.classList.remove("show"); // Remove the 'show' class to hide the alert
            }, 3000);
        })
        .catch(function(error) {
            console.error("Clipboard copy error:", error);
        });
}