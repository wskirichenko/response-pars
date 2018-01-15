window.onload = function() {
    // koordinati
    var btn = document.getElementById('btn1');
    var latitude = 37;
    var longitude = "&lon=" + 55;
    var $response = document.getElementById("respons");
    var url_api = "https://api.openweathermap.org/data/2.5/forecast?lat=";
    var api_key = "&APPID=297a0b8a76e7182b40195cb9d20ab107";
   
    
    function convertToCelsia (k) {
		var c = 0;
		return c = parseInt(parseFloat(k) - 273.15);
	}

	function createTable (textjson) {
		var cellData, cellTemp, cellWthr;
		// create table header

		var weather_table = new Array(['Date', 'Temperature', 'Weather']);

		// create table body
		for (var i = 0; i < textjson.list.length; i++) {
			weather_table.push([
				textjson.list[i].dt_txt,
				convertToCelsia(textjson.list[i].main.temp),
				textjson.list[i].weather[0].main
			]);	
		}	

		// draw table
		var weather_table_div = document.getElementById("weathertable");
		for (var i = 0; i < weather_table.length; i++){
			weather_table_div.innerHTML += '<div id="weather" class = "row">';
			weather_table_div.innerHTML += '	<div class="col-md-3 tabl-head">' + weather_table[i][0] + '</div>';
			weather_table_div.innerHTML += '	<div class="col-md-2 tabl-head">' + weather_table[i][1] + '</div>';
			weather_table_div.innerHTML += '	<div class="col-md-5 tabl-head">' + weather_table[i][2] + '</div>';
			weather_table_div.innerHTML += '</div>';
		}
	};

    // na pogodni server
    function start (){
        var xhr = new XMLHttpRequest();
        var jsontext;
        xhr.timeout = 2000;
        xhr.onreadystatechange = function(e){
            console.log(this);
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    jsontext = JSON.parse(xhr.response);
                    createTable(jsontext);
                } else {
                    console.error("XHR didn't work: ", xhr.status);
                }
            }
        };
        xhr.ontimeout = function (){
            console.error("request timedout: ", xhr);
        };
        xhr.open("get", url_api + latitude + longitude + api_key, true);
        // xhr.responseType = "text";
        xhr.send();

        
        
    };
   
    btn.addEventListener("click", function() {
        start();
    }); 
}