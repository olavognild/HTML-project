//Animation för navbaren
$(document).scroll(function () {
    if ($(document).scrollTop() > 150) {
        $("nav, .plogo").addClass("scroll");
    }
    else {
        $("nav, .plogo").removeClass("scroll");
    }
});

//Hamburgarmeny
$(document).ready(function () {
    $("#burgar-div").on('click', function () {
        $(this).toggleClass("open");
    });
});


$(document).ready(function () {
    //Funktion för burgardiven
    $("#burgar-div").on("click", function () {

        var currentClass = $("#burgar-div").attr("class");

        if (currentClass === "open") {
            $("#div-menu").removeClass("hidden").addClass("open-menu");
            $("#div-lista").removeClass("hidden").addClass("open-list");
        } else {
            $("#div-menu").removeClass("open-menu").addClass("hidden");
            $("#div-lista").removeClass("open-list").addClass("hidden");
        }
    });
});


$(document).ready(function () {
    //Animation för scroll till toppen av sidan
    $("#linkHome").click(function () {
        $path = $("#home").offset().top;
        event.preventDefault();
        $('body').animate({ scrollTop: $path }, 750);
    })
    //Animation för scroll till anchorPoint1
    $("#link1").click(function () {
        $path = $("#anchor1").offset().top;
        event.preventDefault();
        $('body').animate({ scrollTop: $path }, 1000);
    })

    //Animation för scroll till anchorPoint2
    $("#link2, .motTimmy, .motOla").click(function () {
        $path = $("#anchor2").offset().top;
        event.preventDefault();
        $('body').animate({ scrollTop: $path }, 1000);
    })

    //Animation för scroll till Olas sida i telefonen
    $("#motAnchorOla").click(function () {
        $path = $("#anchorOla").offset().top;
        event.preventDefault();
        $('body').animate({ scrollTop: $path }, 1000);
    })

    //Animation för scroll till anchorPoint3
    $("#link3").click(function () {
        $path = $("#anchor3").offset().top;
        event.preventDefault();
        $('body').animate({ scrollTop: $path }, 1000);
    })

    //Animation för scroll till anchorPoint4
    $("#link4").click(function () {
        $path = $("#anchor4").offset().top;
        event.preventDefault();
        $('body').animate({ scrollTop: $path }, 1000);
    })

    // Tar ut förra veckans datum
    var datum = new Date();
    datum.setDate(datum.getDate() - 7);
    var tidigareDatum = datum.toISOString().slice(0, 10);

    // Hämtar trendande JavaScript
    fetch('https://api.github.com/search/repositories?q=language:javascript+created:>' + tidigareDatum + '&sort=stars&order=desc')
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i < 5; i++) {
                var item = data.items[i];
                var linknamn = item.html_url;
                var projektnamn = item.name;
                var linkägare = item.owner.html_url;
                var anvnamn = item.owner.login;
                var stjarnor = item.stargazers_count;
                var collnamn = item.contributors_url;
                // Lägger in datan i en div
                $('#jstrend').append(" - Namn: " + "<a target=" + "'_blank'" + "href='" + linknamn + "'>" + "<strong>" + projektnamn + "</strong>" + "</a>" + " | Ägare: " + "<a target=" + "'_blank'" + "href='" + linkägare + "'>" + "<strong>" + anvnamn + "</strong>" + "</a>" + " | Stjärnor: " + stjarnor + "<br>");
                // Hämtar ut contributors
                fetch(collnamn)
                    .then(response => response.json())
                    .then(data => {
                        for (var z = 0; z < data.length; z++) {
                            var objekt = data[z];
                            var contribnamn = objekt.login;
                            var contribavatar = objekt.avatar_url;
                            // Lägger in datan i en div
                            $('#JScontributors').append("Contributor: " + contribnamn + "<br> <img src='" + contribavatar + "' alt='avatarbild' class='avatarbilder'><br>");
                        }
                    })
            }
        });

    // Hämtar trendande CSS, fungerar som ovan
    fetch('https://api.github.com/search/repositories?q=language:css+created:>' + tidigareDatum + '&sort=stars&order=desc')
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i < 5; i++) {
                var item = data.items[i];
                var linknamn = item.html_url;
                var projektnamn = item.name;
                var linkägare = item.owner.html_url;
                var anvnamn = item.owner.login;
                var stjarnor = item.stargazers_count;
                var collnamn = item.contributors_url;
                $('#csstrend').append(" - Namn: " + "<a target=" + "'_blank'" + "href='" + linknamn + "'>" + "<strong>" + projektnamn + "</strong>" + "</a>" + " | Ägare: " + "<a target=" + "'_blank'" + "href='" + linkägare + "'>" + "<strong>" + anvnamn + "</strong>" + "</a>" + " | Stjärnor: " + stjarnor + "<br>");
                fetch(collnamn)
                    .then(response => response.json())
                    .then(data => {
                        for (var z = 0; z < data.length; z++) {
                            var objekt = data[z];
                            var contribnamn = objekt.login;
                            var contribavatar = objekt.avatar_url;
                            $('#CSScontributors').append("Contributor: " + contribnamn + "<br> <img src='" + contribavatar + "' alt='avatarbild' class='avatarbilder'><br>");
                        }
                    })
            }
        })
    });

// Antingen visar eller gömmer diven för Javascript-contributors    
document.getElementById("visaMerJS").addEventListener("click", visaMerJavascript);
function visaMerJavascript() {
    var contribJS = document.getElementById("visaMerJS");
    var divJS = document.getElementById("JScontributors");
    if (divJS.style.display === "block") {
        divJS.style.display = "none";
    } else {
        divJS.style.display = "block";
    }
}

// Som ovan fast för CSS
document.getElementById("visaMerStyle").addEventListener("click", visaMerCSS);
function visaMerCSS() {
    var divCSS = document.getElementById("CSScontributors");
    if (divCSS.style.display === "block") {
        divCSS.style.display = "none";
    } else {
        divCSS.style.display = "block";
    }
}

// Byta mellan Timmy och Ola
function bytSlide(clickedId) {
    var slide1 = document.getElementById("personSlide1");
    var slide2 = document.getElementById("personSlide2");

    if (clickedId === "motOla" || clickedId === "motola") {
        $("#personSlide2").removeClass("info-hidden").addClass("info-visible");
        $("#personSlide1").removeClass("info-visible").addClass("info-hidden");
    }
    else {
        $("#personSlide1").removeClass("info-hidden").addClass("info-visible");
        $("#personSlide2").removeClass("info-visible").addClass("info-hidden");
    }
}

//Bildspel
var images = ["img/pic1.jpg", "img/pic2.jpg", "img/pic3.jpg"];
var imageNumber = 0;
var imageLength = images.length - 1;

//Byt till nästa bild
function changeImage() {
    imageNumber++;

    if (imageNumber > imageLength) {
        imageNumber = 0;
    }
    document.getElementById("slideshow").src = images[imageNumber];
}

document.getElementById("nästaknapp").addEventListener("click", changeImage);

//byt till föregående bild
function lastImage() {
    imageNumber--;

    if (imageNumber < 0) {
        imageNumber = imageLength;
    }
    document.getElementById("slideshow").src = images[imageNumber];
}

document.getElementById("föregåendeknapp").addEventListener("click", lastImage);

//Gör att bildspelet rullar på/stannar
var stopp = false;
var intervalHandle = setInterval(changeImage, 1000);

function bildTimer() {
    if (!stopp) {
        clearInterval(intervalHandle);
        stopp = true;
    } else {

        intervalHandle = setInterval(changeImage, 1000);
        stopp = false;
    }
}

document.getElementById("startstopp").addEventListener("click", bildTimer);
document.getElementById("startstopp").addEventListener("click", bytTextBildspel)

//Byter text på knapp beroende på om bildspelet rullar eller inte
function bytTextBildspel() {
    var startstoppen = document.getElementById("startstopp");
    if (startstoppen.value == "Stoppa") {
        startstoppen.value = "Starta";
    } else {
        startstoppen.value = "Stoppa";
    }
}

// Byter text på button beroende på om diven är gömd eller inte
document.getElementById("visaMerJS").addEventListener("click", bytTextJS);
function bytTextJS() {
    var JScontrib = document.getElementById("visaMerJS");
    if (JScontrib.value == "Visa Contributors!") {
        JScontrib.value = "Stäng Ruta";
    } else {
        JScontrib.value = "Visa Contributors!";
    }
}

// Som ovan fast för CSS
document.getElementById("visaMerStyle").addEventListener("click", bytTextCSS)
function bytTextCSS() {
    var CSScontrib = document.getElementById("visaMerStyle");
    if (CSScontrib.value == "Visa Contributors!") {
        CSScontrib.value = "Stäng Ruta";
    } else {
        CSScontrib.value = "Visa Contributors!";
    }
}

function googleMaps() {
    //Google Map
    var orebro = { lat: 59.254496, lng: 15.243522 };
    var centerOrebro = {
        center: orebro,
        zoom: 13,
    };
    //Markören på kartan
    var kartan = new google.maps.Map(document.getElementById("googleMap"), centerOrebro);
    var marker = new google.maps.Marker({
        position: orebro,
        map: kartan
    });
}

//Validering av textfält
var vnamn = document.getElementById("namn");
var vTlf = document.getElementById("tlf");
var vMail = document.getElementById("mail");
var vMsg = document.getElementById("contactMsg");

// Validerar input i kontaktdiven
function validera(element, regex) {

    var value = element.value;
    var valid = regex.test(value);

    element.style.backgroundColor = valid ? "green" : "red";
    if (value.length < 1) {
        element.style.backgroundColor = "white";
    }
}

// Regex validering
vnamn.addEventListener("keyup", function () {

    validera(vnamn, /^[a-zA-ZåäöÅÄÖ -]{1,50}$/);
})

vTlf.addEventListener("keyup", function () {

    validera(vTlf, /^[0-9- ]{3,20}$/);
})

vMail.addEventListener("keyup", function () {

    validera(vMail, /[a-zA-Z0-9\._-]+@[a-zA-Z-.]+\.[a-zA-Z]{1,50}$/);
})

vMsg.addEventListener("keyup", function () {

    validera(vMsg, /^.{1,250}$/);
})


//Beroende på valideringen ska det antingen skickas eller visa att det inte fungerar. Sparar även data.
document.getElementById("contactBtn").addEventListener("click", sparaData)
function sparaData() {
    var namnColor = vnamn.style.backgroundColor;
    var mailColor = vMail.style.backgroundColor;
    var telefonColor = vTlf.style.backgroundColor;
    var msgColor = vMsg.style.backgroundColor;
    var sparadeDatan = {
        namn: document.getElementById("namn").value,
        telefon: document.getElementById("tlf").value,
        mail: document.getElementById("mail").value
    }
    if ((namnColor === "green" || "white") && (telefonColor === "green" || "white") && (mailColor === "green" || "white") && msgColor === "green") {
        alert("Skickat!");
        window.localStorage.setItem("data", JSON.stringify(sparadeDatan));
    } else {
        alert("Något är tokigt");
    }
}
var lagradData = JSON.parse(window.localStorage.getItem("data"));

vnamn.value = lagradData.namn;
vTlf.value = lagradData.telefon;
vMail.value = lagradData.mail;