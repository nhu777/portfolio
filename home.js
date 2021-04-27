function myFunction() {
    "use strict";
    
    var landing = document.getElementById("landing");
    var slack = document.getElementById("slack-case-study");
    var compass = document.getElementById("compass-case-study");
    
    if (slack.style.display === "none") {
        slack.style.display = "block";
        landing.style.display = "none";
        compass.style.display = "none";
    } else {
        slack.style.display = "none";
        landing.style.display = "block";
        compass.style.display = "none";
    }
}

function compass() {
    "use strict";
    
    var landing = document.getElementById("landing");
    var compass = document.getElementById("compass-case-study");
    var slack = document.getElementById("slack-case-study");
    
    if (compass.style.display === "none") {
        compass.style.display = "block";
        landing.style.display = "none";
        slack.style.display ="none";
    } else {
        compass.style.display = "none";
        landing.style.display = "block";
        slack.style.display="none";
    }
}

