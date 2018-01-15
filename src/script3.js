window.onload = function() {
var jsontext = '{"dt":1516017600,"main":{"temp":276.981,"temp_min":276.981,"temp_max":276.981,"pressure":989.13,"sea_level":1036.24,"grnd_level":989.13,"humidity":100,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":3.31,"deg":245},"rain":{"3h":2.225},"snow":{"3h":0.195},"sys":{"pod":"d"}}';
// var jsontext = '{"firstname":"Jesper","surname":"Aaberg","phone":["555-0100","555-0120"]}',
	contact = JSON.parse(jsontext),
	btn = document.getElementById('btn1');

// document.write(contact.surname + ", " + contact.firstname);
// document.write(contact.phone[1]);

	btn.addEventListener("click", function() {
  		document.getElementById('respons').innerHTML = contact.main.temp_min;

  	});
}
