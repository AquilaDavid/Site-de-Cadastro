// Validação do formulario

const form = document.getElementById("form");
const campos = document.querySelectorAll(".inputs");
const span = document.querySelectorAll(".span-input")
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


// função para erro
function setErro(index){
    campos[index].style.border = `3px solid #ff0000`
    span[index].style.display = `block`

}

// Função de validação confirmada
function removerErro(index){
    campos[index].style.border = `3px solid rgb(132, 14, 201)`
    span[index].style.display = `none`
    
}

function NomeValido(){
    if(campos[0].value.length < 3){
        setErro(0);
    }
    else{
        removerErro(0)
    }
}

// Função para validar e-mail
function emailValido(){
    if(emailRegex.test(campos[1].value)){
        removerErro(1)
    }
    else{
        setErro(1)
    }
}

// Função para validar senha
function MainValidarSenha(){
    const senha = campos[2].value;
    const caracteresEspeciais = /[@$#!&]/; // Expressão regular para pelo menos um dos caracteres especiais

    if(senha.length >= 8 && senha !== "1234" && senha !== "abcd" && caracteresEspeciais.test(senha)){
        removerErro(2);
        return true; // Indica que a validação foi bem-sucedida
    } else {
        setErro(2);
        return false; // Indica que a validação falhou
    }
}

// Função para validar se as senhas são iguais
function CompararSenha(){
    const senha = campos[2].value;
    const senhaConfirmacao = campos[3].value;
    const caracteresEspeciais = /[@$#!&]/;
    
    if(senha === senhaConfirmacao && senha.length >= 8 && senha !== "1234" && senha !== "abcd" && caracteresEspeciais.test(senha)){
        removerErro(3);
    } else {
        setErro(3);
    }
}

// Função principal para validar a senha e comparar se for válido
function validarSenhas(){
    if (MainValidarSenha()) {
        CompararSenha(); // Só chama CompararSenha se MainValidarSenha for bem-sucedida
    }
}

// Exemplo de como você pode usar a função validarSenhas em um evento, por exemplo, no submit do formulário
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para validação
    validarSenhas();
});

// Função para mostrar a senha

// TODO deve melhorar a funcionalidade, está funcionando mais não como deve, ele só mostra apenas um Imput a senha, resolva isso e deixe funcional!

function MostrarSenha() {
    const senha = document.getElementById("password");
    const icos = document.getElementById("ico-password")
    const icos2 = document.getElementById("ico-password2")
    // Verifica se o tipo de entrada é "password"
    if (senha.type === 'password') {
        senha.setAttribute("type", "text"); // Muda o tipo para texto
        icos.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
        icos2.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    } else {
        senha.setAttribute('type', 'password'); // Muda o tipo de volta para senha
        icos.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
        icos2.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
}

