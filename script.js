
const createConversionFunction = (fromUnit, toUnit) => {
    return (values) => {
        if (fromUnit === "kg" && toUnit === "lb") {
            return values.map(val => val * 2.20462);
        } else if (fromUnit === "lb" && toUnit === "kg") {
            return values.map(val => val / 2.20462);
        } else if (fromUnit === "km" && toUnit === "miles") {
            return values.map(val => val * 0.621371);
        } else if (fromUnit === "miles" && toUnit === "km") {
            return values.map(val => val / 0.621371);
        } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            return values.map(val => (val * 9 / 5) + 32);
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            return values.map(val => (val - 32) * 5 / 9);
        }
    };
};


const processInput = (input) => input.split(',').map(value => parseFloat(value.trim()));


document.getElementById('convert-weight').addEventListener('click', () => {
    const value = processInput(document.getElementById('weight-value').value);
    const fromUnit = document.getElementById('weight-from').value;
    const toUnit = document.getElementById('weight-to').value;
    const conversionFn = createConversionFunction(fromUnit, toUnit);
    const result = conversionFn(value);
    document.getElementById('weight-result').innerText = `Result: ${result.join(', ')}`;
});


document.getElementById('convert-distance').addEventListener('click', () => {
    const value = processInput(document.getElementById('distance-value').value);
    const fromUnit = document.getElementById('distance-from').value;
    const toUnit = document.getElementById('distance-to').value;
    const conversionFn = createConversionFunction(fromUnit, toUnit);
    const result = conversionFn(value);
    document.getElementById('distance-result').innerText = `Result: ${result.join(', ')}`;
});


document.getElementById('convert-temperature').addEventListener('click', () => {
    const value = processInput(document.getElementById('temp-value').value);
    const fromUnit = document.getElementById('temp-from').value;
    const toUnit = document.getElementById('temp-to').value;
    const conversionFn = createConversionFunction(fromUnit, toUnit);
    const result = conversionFn(value);
    document.getElementById('temp-result').innerText = `Result: ${result.join(', ')}`;
});


document.querySelectorAll('.tab-link').forEach(tab => {
    tab.addEventListener('click', (event) => {
        event.preventDefault();
        
        document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
        
        const targetTab = tab.getAttribute('data-tab');
        document.getElementById(targetTab).classList.remove('hidden');
    });
});
