function verifivaValidade(chute) {
  const numero = +chute

  if (chuteValido(numero)) {
    elementoChute.innerHTML += '<div>Número inválido</div>'
    return
  }

  if (foraDoRange(numero)) {
    elementoChute.innerHTML += `
    <div>Numero fora do range
    ${menorValor} e ${maiorValor}</div>
    `
    return
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>o número secreto era ${numeroSecreto}</h3>

    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
  }
  else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
    `
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
    `
  }
}

function foraDoRange(numero) {
  return numero > maiorValor || numero < menorValor
}

function chuteValido(numero) {
  return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
  if (e.target.id = 'jogar-novamente') {
    window.location.reload()
  }
})