function redirecionar() {
	var email = document.getElementById("login").value;
	var senha = document.getElementById("password").value;
	var valid = -1;

	var emailArray = [
		"brayan@pinguins.com",
		"yan@pinguins.com",
		"ricardo@pinguins.com",
		"marcos@pinguins.com",
		"igor@pinguins.com",
		"lucas@pinguins.com",
		"yuri@pinguins.com",
	];
	var senhaArray = [
		"brayan123",
		"yan123",
		"ricardo123",
		"marcos123",
		"igor123",
		"lucas123",
		"yuri123",
	];

	for (var i = 0; i < emailArray.length; i++) {
		if (email == emailArray[i] && senha == senhaArray[i]) {
			valid = i;
			break;
		}
	}
	if (valid != -1) {
		window.location = "../../pages/home/index.html";
	} else {
		document.getElementById("alerta").innerHTML =
			"e-mail e/ou senha inválido(s).";
		document.getElementById("password").value = "";
		document.getElementById("login").value = "";
	}
}

document.addEventListener(
	"keypress",
	(e) => {
		if (e.which == 13) {
			redirecionar();
		}
	},
	false
);
