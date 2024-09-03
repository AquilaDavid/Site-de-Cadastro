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

// Função para validar e-mail
function emailValido(){
    if(emailRegex.test(campos[0].value)){
        removerErro(0)
    }
    else{
        setErro(0)
    }
}

// Função para validar senha
function MainValidarSenha(){
    const senha = campos[1].value;
    const caracteresEspeciais = /[@$#!&]/; // Expressão regular para pelo menos um dos caracteres especiais

    if(senha.length >= 8 && senha !== "1234" && senha !== "abcd" && caracteresEspeciais.test(senha)){
        removerErro(1);
    } else {
        setErro(1);
    }
}