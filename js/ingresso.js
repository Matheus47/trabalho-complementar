// Imprime a variável de armazenagem local
console.log(localStorage);

//cria o elemento para apresentar o dado no bilhete
var f = document.createTextNode(localStorage.getItem("filme"));
document.getElementById("nomeFilme").appendChild(f);

//cria o elemento para apresentar o dado no bilhete
var h = document.createTextNode(localStorage.getItem("horario"));
document.getElementById("horarioFilme").appendChild(h);

// Função que recebe e armazena o valor de meia entrada
function meiaEntrada(){
	// faz a captura do valor da entrada
	var entrada = document.getElementById("meia");
	var escolha = entrada.options[entrada.selectedIndex].value;
	window.localStorage.setItem("Meia Entrada", escolha);

	// cria o elemento para apresentar o dado no bilhete
	//var t = document.createTextNode(localStorage.getItem("Meia Entrada"));
	document.getElementById("showMeia").innerHTML = "Total meia" + " ----------- " + localStorage.getItem("Meia Entrada");
	showBilhete();
}

// Função que recebe e armazena o valor de entrada inteira
function inteiraEntrada(){
	// faz a captura do valor da entrada
	var entrada = document.getElementById("inteira");
	var escolha = entrada.options[entrada.selectedIndex].value;
	window.localStorage.setItem("Inteira", escolha);

	// cria o elemento para apresentar o dado no bilhete
	//var t = document.createTextNode(localStorage.getItem("Inteira"));
	document.getElementById("showInteira").innerHTML = "Total inteira" + " ----------- " + localStorage.getItem("Inteira");
	showBilhete();
}

// Função que recebe e armazena o valor de combo tipo 1
function combo1(){
	// faz a captura do valor da entrada
	var entrada = document.getElementById("combo1");
	var escolha = entrada.options[entrada.selectedIndex].value;
	window.localStorage.setItem("Combo 1", escolha);

	// cria o elemento para apresentar o dado no bilhete
	//var t = document.createTextNode(localStorage.getItem("Combo 1"));
	document.getElementById("showCombo1").innerHTML = "Combo tipo 1" + " ----------- " + localStorage.getItem("Combo 1");
	showBilhete();
}

// Função que recebe e armazena o valor de combo tipo 2
function combo2(){
	// faz a captura do valor da entrada
	var entrada = document.getElementById("combo2");
	var escolha = entrada.options[entrada.selectedIndex].value;
	window.localStorage.setItem("Combo 2", escolha);

	// cria o elemento para apresentar o dado no bilhete
	//var t = document.createTextNode(localStorage.getItem("Combo 2"));
	document.getElementById("showCombo2").innerHTML = "Combo tipo 2" + " ----------- " + localStorage.getItem("Combo 2");
	showBilhete();
}

// Função que recebe e armazena o valor de combo tipo 3
function combo3(){
	// faz a captura do valor da entrada
	var entrada = document.getElementById("combo3");
	var escolha = entrada.options[entrada.selectedIndex].value;
	window.localStorage.setItem("Combo 3", escolha);

	// cria o elemento para apresentar o dado no bilhete
	//var t = document.createTextNode(localStorage.getItem("Combo 3"));
	document.getElementById("showCombo3").innerHTML = "Combo tipo 3" + " ----------- " + localStorage.getItem("Combo 3");
	showBilhete();
}

function showBilhete(){
	// faz a soma dos valores de cada opção selecionada
	var soma = parseInt(localStorage.getItem("Meia Entrada")) + parseInt(localStorage.getItem("Inteira")) + parseInt(localStorage.getItem("Combo 1")) + parseInt(localStorage.getItem("Combo 2")) + parseInt(localStorage.getItem("Combo 3"));

	//verifica se o valor é NaN e trata para que apresente 0 no lugar
	if(Number.isNaN(soma)){
		window.localStorage.setItem("totalCompra", 0);
		document.getElementById("total").innerHTML = "Total:" + " " + localStorage.getItem("totalCompra");
	}else{
		window.localStorage.setItem("totalCompra", soma);
		document.getElementById("total").innerHTML = "Total:" + " " + localStorage.getItem("totalCompra");
	}
}
