const convertButton = document.querySelector(".convert-button")
const selectCurrencyToConvert = document.querySelector(".currency-to-convert")
const selectCurrency = document.querySelector(".currency-selected")

function convertCurrencyValuesReal() {
  const inputValue = document.querySelector(".input-value").value
  const valueToConvert = document.querySelector(".currency-value-to-convert")
  const valueConverted = document.querySelector(".currency-value-converted")

  const dolarTodayReal = 5.2
  const euroTodayReal = 6.2
  const libraTodayReal = 7.2

  valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue);

  if (selectCurrencyToConvert.value == "dolar") {
    valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / dolarTodayReal)
  }

  if (selectCurrencyToConvert.value == "euro") {
    valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / euroTodayReal)
  }

  if (selectCurrencyToConvert.value == "libra") {
    valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue / libraTodayReal)
  }
}


function changeCountryFlagDown() {
  const changeCountryWordToConvert = document.getElementById("currency-name")
  const currencyFlag = document.querySelector(".currency-country-flag")

  if (selectCurrencyToConvert.value == "real") {
    changeCountryWordToConvert.innerHTML = "Real brasileiro"
    currencyFlag.src = "./assets/Brasil.png"
  }

  if (selectCurrencyToConvert.value == "dolar") {
    changeCountryWordToConvert.innerHTML = "Dólar americano"
    currencyFlag.src = "./assets/Dolar.png"
  }

  if (selectCurrencyToConvert.value == "euro") {
    changeCountryWordToConvert.innerHTML = "Euro"
    currencyFlag.src = "./assets/Euro.png"
  }

  if (selectCurrencyToConvert.value == "libra") {
    changeCountryWordToConvert.innerHTML = "Libra"
    currencyFlag.src = "./assets/Libra.png"
  }
  
  convertCurrencyValuesReal()
}

convertButton.addEventListener("click", convertCurrencyValuesReal)
selectCurrencyToConvert.addEventListener("change", changeCountryFlagDown)

