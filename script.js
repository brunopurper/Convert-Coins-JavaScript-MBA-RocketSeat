// Obtendo elementos do formulário.

const form = document.querySelector("form")
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


// Cotação

const USD = 4.87
const EUR = 5.56
const GBP = 7.00


// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")

})

// Capturando o evento de submit (enviar) do formulário.
form.onsubmit = (event) => {
  event.preventDefault()


  switch(currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Função para converter a moeda.

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)} `
  // Calcula o total
    let total = amount * price
    total = formatCurrencyBRL(total).replace("R$", "")

    // Formata o total
    result.textContent = `${total} Reais`
    // Aplica a classe que exibe o footer como resultado.
    footer.classList.add("show-result")
  } catch (error) {
    console.log(error)
    // Remove a classe
    footer.classList.remove("show-result")
    alert("Não foi possível converter: Tente novamente mais tarde 🥲")
  }
}

// Formata a moeda em real
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}