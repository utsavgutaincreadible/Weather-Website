var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "77f64f9027bb8e36a79b679eb7bc7c3a";

function conversion(val) {
  return (val - 273.15).toFixed(2);
}

btn.addEventListener('click', function() {
  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&appid=${apik}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data); // Log the API response

      if (data.cod !== 200) {
        throw new Error('Invalid city name');
      }

      var nameval = data['name'];
      var descripval = data['weather'][0]['description'];
      var temperature = data['main']['temp'];
      var windspeed = data['wind']['speed'];

      city.innerHTML = `Weather of <span>${nameval}</span>`;
      temp.innerHTML = `Temperature: <span>${conversion(temperature)} C</span>`;
      descrip.innerHTML = `Sky Conditions: <span>${descripval}</span>`;
      wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`;
    })
    .catch(err => alert('You entered a correct city name'));
});
