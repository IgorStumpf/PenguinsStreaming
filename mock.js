var movies = [
	{
		link: "https://www.youtube.com/watch?v=xYR3mY4CLOM&ab_channel=ChangingSeasTVChangingSeasTV",
		imagem: "../../assets/img/documentario6.jpg",
		nome: "Penguins in the desert",
	},
	{
		link: "https://www.youtube.com/watch?v=gKWNUyTGqss&ab_channel=ClevverTVClevverTV",
		imagem: "../../assets/img/3.jpg",
		nome: "Happy feet 2",
	},
	{
		link: "https://www.youtube.com/watch?v=13jOLKuPrLY&ab_channel=FoxFamilyEntertainmentBrasilFoxFamilyEntertainmentBrasil",
		imagem: "../../assets/img/5.jpg",
		nome: "Os pinguins de Madagascar",
	},
	{
		link: "https://www.youtube.com/watch?v=uFMUfJT63tM&ab_channel=CartoonNetworkBrasilCartoonNetworkBrasil",
		imagem: "../../assets/img/6.jpg",
		nome: "Oswaldo",
	},
	{
		link: "https://www.youtube.com/watch?v=Qte3_DXGV0o&ab_channel=AlltheAnimeAlltheAnime",
		imagem: "../../assets/img/7.jpg",
		nome: "Penguin Highway",
	},
	{
		link: "https://www.youtube.com/watch?v=hjjcJsr9_B4&ab_channel=SonyPicturesBrasilSonyPicturesBrasil",
		imagem: "../../assets/img/8.jpg",
		nome: "Ta dando onda",
	},
	{
		link: "https://www.youtube.com/watch?v=mBVj_LKG2HE&ab_channel=TeleFilms-ConstruindooseucinemaTeleFilms-Construindooseucinema",
		imagem: "../../assets/img/9.jpg",
		nome: "Ta dando onda 2",
	},
	{
		link: "https://www.youtube.com/watch?v=lXfPVBmDY60&ab_channel=MovieclipsClassicTrailersMovieclipsClassicTrailersVerificado",
		imagem: "../../assets/img/4.jpg",
		nome: "Cristal e o pinguim",
	},
	{
		link: "https://www.youtube.com/watch?v=hFUC5adf8FE",
		imagem: "../../assets/img/2.jpg",
		nome: "Happy feet",
	},
	{
		link: "https://www.youtube.com/watch?v=L7tWNwhSocE&ab_channel=MovieclipsMovieclips",
		imagem: "../../assets/img/documentario1.jpg",
		nome: "Marcha dos pinguins",
	},
	{
		link: "https://www.youtube.com/watch?v=SMsA07Yej7E&ab_channel=Europa-FilmesEuropa-Filmes",
		imagem: "../../assets/img/documentario2.jpg",
		nome: "A farsa dos pinguins",
	},
	{
		link: "https://www.youtube.com/watch?v=VubxHFy7ocE&ab_channel=WaltDisneyStudiosWaltDisneyStudios",
		imagem: "../../assets/img/documentario3.jpg",
		nome: "Penguins",
	},
];

function fetchData() {
	document.querySelector(".carrousel").innerHTML = movies.map((movie) => {
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
	});
}
