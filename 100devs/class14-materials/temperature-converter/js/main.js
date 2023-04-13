//Write your pseduo code first! 
// Grab temperature
document.querySelector('#convert').addEventListener('click', convert)

function convert() {
    let tempFahrenheit = document.querySelector('#tempCelsius').value * 9/5 + 32
  
    document.querySelector('#convertedTemperature').innerText = `${tempFahrenheit}°F`
  }
// Convert temperature
// Display new temperature