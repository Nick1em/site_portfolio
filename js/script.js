

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // impede o envio real da menssagem

    //PEGANDO OS VALORES DOS CAMPOS
    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("message").value.trim();

    //VALIDANDO SE OS CAMPOS ESTÃO PREENCHIDOS
    if (!nome || !email || !mensagem) {
        alert("Preencha todos os campos!");
        return;
    }

    //SIMULANDO O ENVIO DA MENSAGEM
    alert("Mensagem enviada com sucesso! ✅");

    //LIMPAR OS CAMPOS APÓS O ENVIO
    form.reset();
});