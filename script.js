const buttonVerMais = document.querySelector("#buttonVerMais");
const container = document.querySelector("#technologiesUsed-contanier");
const carrossel = document.querySelector("#carrossel");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const bntTop = document.querySelector("#btnTop");;

buttonVerMais.addEventListener("click", ()=>{
    container.classList.toggle('show-all');
    buttonVerMais.textContent = container.classList.contains('show-all') ? 'Ver menos' : 'Ver mais';
})

function getItemWidth() {
  const item = carrossel.querySelector(".projeto");
  return item ? item.offsetWidth + 20 : 360;
}
next.addEventListener('click', () => {
    carrossel.scrollBy({ left: getItemWidth(), behavior: 'smooth' });
});

prev.addEventListener('click', () => {
    carrossel.scrollBy({ left: -getItemWidth(), behavior: 'smooth' });
});

window.onscroll= function(){
    if(document.documentElement.scrollTop > 250){
        bntTop.style.display = 'block';
    }
    else{
        bntTop.style.display = 'none';
    }

}
document.querySelector("#btnTop").addEventListener("click", ()=>{
    window.scrollTo({top: 0, behavior: "smooth"})
})