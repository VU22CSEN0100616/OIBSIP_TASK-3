function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

document.getElementById('convertBtn').addEventListener('click', function() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const conversionType = document.getElementById('conversion').value;
    let result;
    if (isNaN(celsius)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }

    if (conversionType === 'fahrenheit') {
        result = celsiusToFahrenheit(celsius);
        document.getElementById('result').innerText = `${celsius}°C is ${result.toFixed(2)}°F`;
    } else if (conversionType === 'kelvin') {
        result = celsiusToKelvin(celsius);
        document.getElementById('result').innerText = `${celsius}°C is ${result.toFixed(2)}K`;
    }
});
