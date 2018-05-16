function horarios(hora){
	window.localStorage.setItem("horario", hora);
}

function nomeFilme(nome){
	window.localStorage.setItem("filme", nome);
}

// Imprime a variável de armazenagem local
console.log(localStorage);