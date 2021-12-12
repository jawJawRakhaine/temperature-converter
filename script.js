const celciusInput = document.querySelector("#celcius");
const fahrenheitInput = document.querySelector("#fahrenheit");
const kelvinInput = document.querySelector("#kelvin");

const inputs = document.getElementsByClassName("input");
for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];
  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);
    switch (e.target.name) {
      case "celcius":
        fahrenheitInput.value = ((value * 9) / 5 + 32).toFixed(2);
        kelvinInput.value = (value + 273.15).toFixed(2);
        break;
      case "fahrenheit":
        celciusInput.value = (((value - 32) * 5) / 9).toFixed(2);
        kelvinInput.value = (((value - 32) * 5) / 9 + 273.15).toFixed(2);
        break;
      case "kelvin":
        celciusInput.value = (value - 273.15).toFixed(2);
        fahrenheitInput.value = (((value - 273.15) * 9) / 5 + 32).toFixed(2);
        break;
    }
  });
}
