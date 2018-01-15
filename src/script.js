
	// var jsonText = '{"cod":"200","message":0.0025,"cnt":40,"list":[{"dt":1515844800,"main":{"temp":269.23,"temp_min":268.982,"temp_max":269.23,"pressure":1040.73,"sea_level":1049.1,"grnd_level":1040.73,"humidity":74,"temp_kf":0.25},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":12},"wind":{"speed":7.24,"deg":60.0046},"snow":{"3h":0.001},"sys":{"pod":"d"},"dt_txt":"2018-01-13 12:00:00"},{"dt":1515855600,"main":{"temp":267.79,"temp_min":267.596,"temp_max":267.79,"pressure":1041.43,"sea_level":1049.93,"grnd_level":1041.43,"humidity":66,"temp_kf":0.19},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":56},"wind":{"speed":7.29,"deg":63.0029},"snow":{"3h":0.024},"sys":{"pod":"n"},"dt_txt":"2018-01-13 15:00:00"}}';
	var jsontext = '{"firstname":"Jesper","surname":"Aaberg","phone":["555-0100","555-0120"]}';
	var btn = document.getElementById('btn1');

	var event = JSON.parse(jsonText);


	// var t1 = eval("2 + 2");
	// console.log(t1);


	btn.addEventListener("click", function() {
  		document.getElementById('loading').innerHTML = fail1;
  		console.log(event.date.getDate());
  	});	
	

