$(document).ready(function() {
    $("#searchTitle").hide();
    $("#searchInput").hide();
    $("#btnToday").hide();
    $("#btnDays").hide();
    $("#btnPlace").hide();
});

$("#btnHome").click(function() {
    $("#searchTitle").hide();
    $("#searchInput").hide();
    $("#btnToday").hide();
    $("#btnDays").hide();
    $("#btnPlace").hide();
    $(".tiempodiv").remove();
});

$("#btnNow").click(function() {
    $("#searchTitle").show();
    $("#searchInput").show();
    $("#btnToday").show();
    $("#btnDays").hide();
    $("#btnPlace").hide();
    $(".tiempodiv").remove();
});

$("#btnFuture").click(function() {
    $("#searchTitle").show();
    $("#searchInput").show();
    $("#btnToday").hide();
    $("#btnDays").show();
    $("#btnPlace").hide();
    $(".tiempodiv").remove();
});
$("#btnLocation").click(function() {
    $("#searchTitle").show();
    $("#searchInput").hide();
    $("#btnToday").hide();
    $("#btnDays").hide();
    $("#btnPlace").show();
    $(".tiempodiv").remove();
});
$("#btnToday").click(function() {
    var city = $("#searchInput").val();
    $.get(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=51b9a959c32c471d38615818f47e07f6",
        function(myweather) {
            $(".tiempodiv").remove();
            var nombre = myweather.name;
            var temperature = myweather.main.temp;
            var grados = temperature - 273.15;
            var tiempo = myweather.weather[0].main;
            var icono = myweather.weather[0].icon;
            $("#cityRow").append(
                "<div  class='card col-4 tiempodiv'><h3> " +
                nombre +
                "</h3><img class='imgtiempo' src='http://openweathermap.org/img/wn/" +
                icono +
                "@2x.png'/> <h2>" +
                tiempo +
                " <br />" +
                grados.toFixed() +
                "Cº</h2></div>"
            );
        }
    );
});
$("#btnDays").click(function() {
    var ciudad = $("#searchInput").val();
    $.get(
        "http://api.openweathermap.org/data/2.5/forecast?q=" +
        ciudad +
        "&appid=51b9a959c32c471d38615818f47e07f6",
        function(futureweather) {
            $(".tiempodiv").remove();
            for (var i = 0; i < 4; i++) {
                if (i == 0) {
                    e = 6;
                } else if (i == 1) {
                    e = 14;
                } else if (i == 2) {
                    e = 22;
                } else {
                    e = 30;
                }
                var nombre = futureweather.city.name;
                var temperature = futureweather.list[e].main.temp;
                var grados = temperature - 273.15;
                var tiempo = futureweather.list[e].weather[0].main;
                var icono = futureweather.list[e].weather[0].icon;
                var hora = futureweather.list[e].dt_txt;
                $("#cityRow").append(
                    "<div  class='card col-6 tiempodiv'><h3> " +
                    nombre +
                    "</h3><img class'imgicon' src='http://openweathermap.org/img/wn/" +
                    icono +
                    "@2x.png'/> <h2>" +
                    tiempo +
                    " " +
                    grados.toFixed() +
                    "Cº <br /></h2>" +
                    hora +
                    "</div>"
                );
            }
        }
    );
});
var longitud;
var latitud;
var onSuccess = function(position) {
    latitud = position.coords.latitude;
    longitud = position.coords.longitude;
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert("code: " + error.code + "\n" + "message: " + error.message + "\n");
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);
$("#btnPlace").click(function() {
    $.get(
        "http://api.openweathermap.org/data/2.5/weather?lat=" +
        latitud +
        "&lon=" +
        longitud +
        "&appid=51b9a959c32c471d38615818f47e07f6",
        function(actualweather) {
            $(".tiempodiv").remove();
            var nombre = actualweather.name;
            var temperature = actualweather.main.temp;
            var grados = temperature - 273.15;
            var tiempo = actualweather.weather[0].main;
            var icono = actualweather.weather[0].icon;
            $("#cityRow").append(
                "<div  class='card col-6 tiempodiv'><h3> " +
                nombre +
                "</h3><img class='imgtiempo' src='http://openweathermap.org/img/wn/" +
                icono +
                "@2x.png'/> <h2>" +
                tiempo +
                " <br />" +
                grados.toFixed() +
                "Cº</h2></div>"
            );
        }
    );
});