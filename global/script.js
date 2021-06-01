const fila = document.querySelector(".container-carrousel");

const setaEsquerda = document.getElementById("left-arrow");
const setaDireita = document.getElementById("right-arrow");

// ? ----- ----- Event Listener para a seta direita. ----- -----
setaDireita.addEventListener("click", () => {
	fila.scrollLeft += fila.offsetWidth;

	const IndicatorActive = document.querySelector(".indicators .active");
	if (IndicatorActive?.nextSibling) {
		IndicatorActive.nextSibling.classList.add("active");
		IndicatorActive.classList.remove("active");
	}
});

// ? ----- ----- Event Listener para a seta esquerda. ----- -----
setaEsquerda.addEventListener("click", () => {
	fila.scrollLeft -= fila.offsetWidth;

	const IndicatorActive = document.querySelector(".indicators .active");
	if (IndicatorActive?.previousSibling) {
		IndicatorActive.previousSibling.classList.add("active");
		IndicatorActive.classList.remove("active");
	}
});

// ? ----- ----- Paginacão ----- -----
const numberPages = Math.ceil(movies.length / 5);
for (let i = 0; i < numberPages; i++) {
	const indicator = document.createElement("button");
	window.width;

	if (i === 0) {
		indicator.classList.add("active");
	}

	document.querySelector(".indicators").appendChild(indicator);
	indicator.addEventListener("click", (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document
			.querySelector(".indicators .active")
			.classList.remove("active");
		e.target.classList.add("active");
	});
}