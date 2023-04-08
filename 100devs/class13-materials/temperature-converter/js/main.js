//Write your pseduo code first!

// THIS IS HOW I DID IT!!!!!!!!!!!!

// Grab temp in Celsius

// document.querySelector('#convert').addEventListener('click', convert)

// function convert() {
//     // Convert it to Fahrenheit
//     const fahrenheit = document.querySelector('#tempCelsius').value * 9/5 + 32

//     // Display the value
//     document.querySelector('#convertedTemperature').innerText = `${fahrenheit}°F`
// }

// THIS IS HOW LEON SHOWED IT!!!!!!!!!!!!
document.querySelector('#convert').addEventListener('click', convert)

function convert() {
    // Grab temp in Celsius
    let temp = document.querySelector('#tempCelsius').value
    // Convert it to Fahrenheit
    temp = temp * 9/5 + 32
    // Display the value
    document.querySelector('#convertedTemperature').innerText = `${temp}°F`
}