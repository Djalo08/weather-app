       const openweathermaps_key = "f002dfd443e7f397e71917a53cccaecc"

       function searchWeather() {
    var lat = $("#paw-form-lat").val();
    var lon = $("#paw-form-lon").val();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var weatherObject = JSON.parse(xhttp.response);
            var currentWeather = weatherObject["weather"][0]["description"];
            $("#paw-results-row").show();
            $("#Results").html(currentWeather);
        }
    }
    xhttp.open("GET",`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${openweathermaps_key}`,true);
    xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.send();
        }
//alterei a linha 12,5 e o meu key
