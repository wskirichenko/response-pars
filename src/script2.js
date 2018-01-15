window.onload = function() {
    // koordinati
    var btn = document.getElementById('btn1');
    var latitude = 37;
    var longitude = "&lon=" + 55;
    var $response = document.getElementById("respons");
    var url_api = "https://api.openweathermap.org/data/2.5/forecast?lat=";
    var api_key = "&APPID=297a0b8a76e7182b40195cb9d20ab107";
    

    // na pogodni server
    function start (){
        var xhr = new XMLHttpRequest();
        xhr.timeout = 2000;
        xhr.onreadystatechange = function(e){
            console.log(this);
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    // debugger;
                    // console.log(xhr.response);
                    $response.innerHTML = xhr.response;
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

        jsontext = JSON.parse(xhr.response);
        document.getElementById('pars').innerHTML = jsontext.main.temp_min;
    };
   
    btn.addEventListener("click", function() {
        start();
    }); 
}