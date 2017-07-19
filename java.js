$( document ).ready(function() {
// defining variables
  var placelat;
  var placelon;
  var placeName;
  var placeTemp;
  var weatherIcon;
  var iconUrl;
  var backgroundColor;
  function weatherDataCelsius() {
// getting longitude and latitude data and setting it as values for variables
    navigator.geolocation.getCurrentPosition(locationHandler);
    function locationHandler(position){
      placelat = position.coords.latitude;
      placelon = position.coords.longitude;
// getting location name and temperature data and setting it as values for variables
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?APPID=c87ae1ce207b86d32f1ac31b319e04ad&lat="+placelat+"&lon="+placelon+"&units=metric", function(dataTwo){
        placeName = dataTwo.name;
        placeTemp = dataTwo.main.temp;
//adding data from variables to HTML document
        $( ".weather_Location" ).html( placeName );
        $( ".temp_deg" ).html( Math.round(placeTemp) + "&nbsp;&deg;C" );
// assigning weather icons name from openweathermap.org API request to a variable
        weatherIcon = dataTwo.weather[0].icon;
// using switch statement to set icon and background depending on what icon received from openweathermap.org
        switch (weatherIcon) {
          case '01d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/1_ee8m7x.png';
            backgroundColor = '#ffffcc';
            break;
          case '02d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/2_snkyrl.png';
            backgroundColor = '#ffffcc';
            break;
          case '03d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/3_wvvsmq.png';
            backgroundColor = '#d9d9d9';
            break;
          case '04d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/3_wvvsmq.png';
            backgroundColor = '#d9d9d9';
            break;
          case '09d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/4_vveyub.png';
            backgroundColor = '#b3d9ff';
            break;
          case '10d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/5_we8jwt.png';
            backgroundColor = '#b3d9ff';
            break;
          case '11d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/6_hkoodr.png';
            backgroundColor = '#b3d9ff';
            break;
          case '13d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/7_ikf9r1.png';
            backgroundColor = '#80ccff';
            break;
          case '50d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/8_pwltiz.png';
            backgroundColor = '#d9d9d9';
            break;
          case '01n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/9_fiq6zz.png';
            backgroundColor = '#ffffcc';
            break;
          case '02n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/10_idcsnl.png';
            backgroundColor = '#ffffcc';
            break;
          case '03n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/3_wvvsmq.png';
            backgroundColor = '#d9d9d9';
            break;
          case '04n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/3_wvvsmq.png';
            backgroundColor = '#d9d9d9';
            break;
          case '09n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/4_vveyub.png';
            backgroundColor = '#b3d9ff';
            break;
          case '10n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/5_we8jwt.png';
            backgroundColor = '#b3d9ff';
            break;
          case '11n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/6_hkoodr.png';
            backgroundColor = '#b3d9ff';
            break;
          case '13n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/7_ikf9r1.png';
            backgroundColor = '#80ccff';
            break;
          case '50n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/8_pwltiz.png';
            backgroundColor = '#d9d9d9';
            break;
        }
        $(".icon").html("<img src='" + iconUrl  + "'>");
        $(".main_body").css("background-color", backgroundColor );
      });
    }
  }
// the same function as above, but instead of Celsius gets Fahrenheit temperature
  function weatherDataFahrenheit() {
        navigator.geolocation.getCurrentPosition(locationHandler);
        function locationHandler(position){
          placelat = position.coords.latitude;
          placelon = position.coords.longitude;
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?APPID=c87ae1ce207b86d32f1ac31b319e04ad&lat="+placelat+"&lon="+placelon+"&units=imperial", function(dataTwo){
        placeName = dataTwo.name;
        placeTemp = dataTwo.main.temp;
        $( ".weather_Location" ).html( placeName );
        $( ".temp_deg" ).html( Math.round(placeTemp) + "&nbsp;&deg;F" );
        weatherIcon = dataTwo.weather[0].icon;
        switch (weatherIcon) {
          case '01d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/1_ee8m7x.png';
            backgroundColor = '#ffffcc';
            break;
          case '02d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/2_snkyrl.png';
            backgroundColor = '#ffffcc';
            break;
          case '03d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/3_wvvsmq.png';
            backgroundColor = '#d9d9d9';
            break;
          case '04d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/3_wvvsmq.png';
            backgroundColor = '#d9d9d9';
            break;
          case '09d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/4_vveyub.png';
            backgroundColor = '#b3d9ff';
            break;
          case '10d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/5_we8jwt.png';
            backgroundColor = '#b3d9ff';
            break;
          case '11d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/6_hkoodr.png';
            backgroundColor = '#b3d9ff';
            break;
          case '13d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/7_ikf9r1.png';
            backgroundColor = '#80ccff';
            break;
          case '50d':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/8_pwltiz.png';
            backgroundColor = '#d9d9d9';
            break;
          case '01n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/9_fiq6zz.png';
            backgroundColor = '#ffffcc';
            break;
          case '02n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/10_idcsnl.png';
            backgroundColor = '#ffffcc';
            break;
          case '03n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/3_wvvsmq.png';
            backgroundColor = '#d9d9d9';
            break;
          case '04n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/3_wvvsmq.png';
            backgroundColor = '#d9d9d9';
            break;
          case '09n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/4_vveyub.png';
            backgroundColor = '#b3d9ff';
            break;
          case '10n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/5_we8jwt.png';
            backgroundColor = '#b3d9ff';
            break;
          case '11n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/6_hkoodr.png';
            backgroundColor = '#b3d9ff';
            break;
          case '13n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/7_ikf9r1.png';
            backgroundColor = '#80ccff';
            break;
          case '50n':
            iconUrl = 'http://res.cloudinary.com/db6e0gluw/image/upload/v1498754536/8_pwltiz.png';
            backgroundColor = '#d9d9d9';
            break;
        }
        $(".icon").html("<img src='" + iconUrl  + "'>");
        $(".main_body").css("background-color", backgroundColor );
      });
    }
  }
// displays date and time
  function localTime() {
    var timeNow = new Date();
// when single units displayed as minutes add's '0' in front
    var convertingMinutes = ('0'+timeNow.getMinutes()).slice(-2);
    var timeDisplay = timeNow.getDate() + "/" + (timeNow.getMonth()+1) + "/" + timeNow.getFullYear() + " " + timeNow.getHours() + ":" + convertingMinutes;
    $( ".date_time" ).html( timeDisplay );
  }
  localTime();
  weatherDataCelsius();
// Bootstraps button toggles between Celsius and Fahrenheit
  $(".toggle").click(function() {
  if($(this).hasClass("off")){
    weatherDataCelsius();
    localTime();
  }
  else{
    weatherDataFahrenheit();
    localTime();
  }
});
});
