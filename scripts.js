/* 
   Variáveis
      Um espaço de memória que você
      reserva e pode guardar o que 
      quiser lá dentro

      3 Jeitos de cri9ar uma variável
        - var / jeito antigo - NÂO USA MAIS
        -let -> VOCÊ pode Alterar o Valor Depois 
        -const -> Constante */
const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


    function mostrarForm() {
      form.style.left = "50%"
      form.style.transform = "translateX(-50%)"
      mascara.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}