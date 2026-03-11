    <script>
        const openweathermaps_key = "f002dfd443e7f397e71917a53cccaecc"

        function searchWeather(lat, long) {
            var lat = $("#paw-form-lat").val();
            var lon = document.getElementById('paw-form-lon').value;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var weatherObject = JSON.parse(xhttp.response);
                    var currentWeather = weatherObject["weather"][0]["description"];
                    $("#paw-results-row").show();
                    document.getElementById("Results").innerHTML = currentWeather;
                }
            }

            xhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${openweathermaps_key}`, true);
            xhttp.setRequestHeader('Accept', 'application/json');
            xhttp.send();
        }
    </script>
//alterei a linha 12,5 e o meu key
