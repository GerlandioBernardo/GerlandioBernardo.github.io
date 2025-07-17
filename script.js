const buttonVerMais = document.querySelector("#buttonVerMais");
const container = document.querySelector("#technologiesUsed-contanier");

buttonVerMais.addEventListener("click", ()=>{
    container.classList.toggle('show-all');
    buttonVerMais.textContent = container.classList.contains('show-all') ? 'Ver menos' : 'Ver mais';
})