//jshint esversion: 6

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navLinks = document.querySelectorAll(".nav-link");
const doacao = document.querySelector(".doacao");

menuBtn.onclick = () => {
	navbar.classList.add("show");
	menuBtn.classList.add("hide");
	body.classList.add("disabled");
	doacao.classList.add("show");
};

cancelBtn.onclick = () => {
	body.classList.remove("disabled");
	navbar.classList.remove("show");
	menuBtn.classList.remove("hide");
	doacao.classList.remove("show");
};

window.onscroll = () => {
	this.scrollY > 20
		? navbar.classList.add("sticky")
		: navbar.classList.remove("sticky");
};

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		body.classList.remove("disabled");
		navbar.classList.remove("show");
		menuBtn.classList.remove("hide");
		doacao.classList.remove("show");
	});
});

function filtrarFilme() {
	event.preventDefault();
	var moviesFilter = movies.filter((filme) =>
		filme.nome
			.toLowerCase()
			.includes(document.getElementById("pesquisa").value.toLowerCase())
	);
	document.querySelector(".carrousel").innerHTML = moviesFilter.map(
		(movie) => {
			return `
      <div class="movie">
      <a
        href="${movie.link}"
        target="_blank"
        ><img
          src="${movie.imagem}"
          alt="${movie.nome}"
      /></a>
      </div>
  `;
		}
	);
	console.log(moviesFilter);
}
