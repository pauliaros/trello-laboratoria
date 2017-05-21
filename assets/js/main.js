function agregarLista(){
	var lista = document.getElementByClassName("lista").value;
	document.getElementByClassName("lista").value = "";

	var contenedor

	var agregarLista = document.createElement("div");
	var textoAgregarLista = document.createTextNode("lista");
	var cajita = document.createElement("span");

	cajita.appendChild(textoAgregarLista);
	agregarLista.appendChild(cajita);
	contenedor.appendChild(agregarLista);

	var cajaTexto = document.createElement("input");
	cajaTexto.type "textarea";
	cajaTexto.setAttribute("class", "text");
	agregarLista.appendChild(cajaTexto);

	cajaTexto.addEventListener("click", function(){
		cajita.classList.toogle("textarea");
	})




}