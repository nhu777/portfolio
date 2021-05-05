function myFunction() {
    "use strict";
    
    var landing = document.getElementById("landing");
    var slack = document.getElementById("slack-case-study");
    var compass = document.getElementById("compass-case-study");
    var rally = document.getElementById("rally-case-study");
    var lorem = document.getElementById("lorem-case-study")
    
    if (slack.style.display === "none") {
        slack.style.display = "block";
        landing.style.display = "none";
        compass.style.display = "none";
        rally.style.display = "none";
        lorem.style.display = "none";
    } else {
        slack.style.display = "none";
        landing.style.display = "block";
        compass.style.display = "none";
        rally.style.display = "none";
        lorem.style.display = "none";
    }
}

function compass() {
    "use strict";
    
    var landing = document.getElementById("landing");
    var compass = document.getElementById("compass-case-study");
    var slack = document.getElementById("slack-case-study");
    var rally = document.getElementById("rally-case-study");
    var lorem = document.getElementById("lorem-case-study")
    
    if (compass.style.display === "none") {
        compass.style.display = "block";
        landing.style.display = "none";
        slack.style.display = "none";
        rally.style.display = "none";
        lorem.style.display = "none";
    } else {
        compass.style.display = "none";
        landing.style.display = "block";
        slack.style.display="none";
        rally.style.display = "none";
        lorem.style.display = "none";
    }
}

function rally() {
    "use strict";
    
    var landing = document.getElementById("landing");
    var compass = document.getElementById("compass-case-study");
    var slack = document.getElementById("slack-case-study");
    var rally = document.getElementById("rally-case-study");
    var lorem = document.getElementById("lorem-case-study")
    
    if (rally.style.display === "none") {
        compass.style.display = "none";
        landing.style.display = "none";
        slack.style.display = "none";
        rally.style.display = "block";
        lorem.style.display = "none";
    } else {
        landing.style.display = "block";
        compass.style.display = "none";
        slack.style.display="none";
        rally.style.display = "none";
        lorem.style.display = "none";
    }
}

function lorem() {
    "use strict";
    
    var landing = document.getElementById("landing");
    var compass = document.getElementById("compass-case-study");
    var slack = document.getElementById("slack-case-study");
    var rally = document.getElementById("rally-case-study");
    var lorem = document.getElementById("lorem-case-study");
    
    if (lorem.style.display === "none") {
        compass.style.display = "none";
        landing.style.display = "none";
        slack.style.display = "none";
        rally.style.display = "none";
        lorem.style.display = "block";
    } else {
        landing.style.display = "block";
        compass.style.display = "none";
        slack.style.display = "none";
        rally.style.display = "none";
        lorem.style.display = "none";
    }
}
