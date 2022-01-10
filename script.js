//efeitos de transição
if (window.SimpleSlide) {

	new SimpleSlide({
		slide: "quote", // nome do atributo data-slide="principal"
		time: 5000 // tempo de transição dos slides
	});

	new SimpleSlide({
		slide: "portfolio",
		time: 5000,
		nav: true
	});

}

if (window.SimpleAnime) {
	new SimpleAnime();
}

//scroll suave

const menuItems = document.querySelectorAll(".cabecalho-menu a[href^='#']");

menuItems.forEach(item => {

item.addEventListener("click", scrollToOnClick)

})

function scrollToOnClick(event){
  event.preventDefault();
  const to = getScrollTopByHref(event.target);

scrollToPosition(to);
}

function scrollToPosition(to){
  window.scroll({
    top: to,
    behavior: "smooth",

  })

}

function getScrollTopByHref(element){
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;


}


// troca de cor

//hBasic

function trocaLaranjaBasic() {

  document.getElementById("basicId").src="img/óculos/primeira-posicao/laranja.png";

}

function trocaBrancoBasic() {

  document.getElementById("basicId").src="img/óculos/primeira-posicao/branco.png";
  

}

function trocaPretoBasic() {

  document.getElementById("basicId").src="img/óculos/primeira-posicao/preto.png";
  
}

//hPlus

function trocaPretoPlus() {

  document.getElementById("plusId").src="img/óculos/segunda-posicao/preto2.png";

}

function trocaLaranjaPlus() {

  document.getElementById("plusId").src="img/óculos/segunda-posicao/laranja2.png";

}

function trocaBrancoPlus() {

  document.getElementById("plusId").src="img/óculos/segunda-posicao/branco2.png";

}

//hPremium

function trocaBrancoPremium() {

  document.getElementById("premiumId").src="img/óculos/terceira-posicao/branco3.png";

}

function trocaPretoPremium() {

  document.getElementById("premiumId").src="img/óculos/terceira-posicao/preto3.png";

}

function trocaLaranjaPremium() {

  document.getElementById("premiumId").src="img/óculos/terceira-posicao/laranja3.png";

}


