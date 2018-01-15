window.onload = function () {
    var jsontext = '{"cod":"200","message":0.0055,"cnt":40,"list":[{"dt":1516028400,"main":{"temp":278,"temp_min":274.958,"temp_max":278,"pressure":992.55,"sea_level":1040.29,"grnd_level":992.55,"humidity":100,"temp_kf":3.04},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":1.76,"deg":277.507},"rain":{"3h":2.525},"snow":{"3h":0.554},"sys":{"pod":"n"},"dt_txt":"2018-01-15 15:00:00"},{"dt":1516039200,"main":{"temp":276.24,"temp_min":274.211,"temp_max":276.24,"pressure":993.33,"sea_level":1041.32,"grnd_level":993.33,"humidity":100,"temp_kf":2.03},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":1.57,"deg":262.004},"rain":{"3h":0.1525},"snow":{"3h":2.311},"sys":{"pod":"n"},"dt_txt":"2018-01-15 18:00:00"}]}';
	var btn = document.getElementById('btn1'),
		textjson = JSON.parse(jsontext);


	function convertToCelsia (k) {
		var c = 0;
		return c = parseInt(parseFloat(k) - 273.15);
	}

	function createTable () {
		var cellData, cellTemp, cellWthr;
		// create table header

		var weather_table = new Array(['Date', 'Temperature', 'Weather']);

		// create table body
		for (let i = 0; i < textjson.list.length; i++) {
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
			weather_table_div.innerHTML += '	<div class="col-md-4 tabl-head">' + weather_table[i][0] + '</div>';
			weather_table_div.innerHTML += '	<div class="col-md-4 tabl-head">' + weather_table[i][1] + '</div>';
			weather_table_div.innerHTML += '	<div class="col-md-4 tabl-head">' + weather_table[i][2] + '</div>';
			weather_table_div.innerHTML += '</div>';
		}
	};

    btn.addEventListener("click", function() {
		createTable();
    }); 
}