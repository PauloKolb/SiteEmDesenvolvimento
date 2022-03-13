const elementos = document.querySelectorAll('[data-anime]');

const animacaoClass = 'animacao';

function animaScroll() {
  const topoPaginaNajanela = window.pageYOffset + ((window.innerHeight * 3) / 4);/*  scroll da janela */ /* animar com atributo */
  elementos.forEach(function (elemento) {
    if (topoPaginaNajanela > elemento.offsetTop) {
      elemento.classList.add(animacaoClass);
    } else {
      elemento.classList.remove(animacaoClass);
    }
  });
}

if (elementos.length) {
  window.addEventListener('scroll', function () {
    animaScroll();
  })

}

/* animação do animate CSS */
/* const target = document.querySelectorAll("[data-Y]");
const animateFadeInDown = "animate";

function animeSroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4) ;
  target.forEach(function (element) {
    if ((windowTop) > element.offsetTop) {
      element.classList.add('animationClass');
    }
  })
}

window.addEventListener('scroll', function () {
  animeScroll();
})
 */





