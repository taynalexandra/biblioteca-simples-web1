/**
 * Código JS da página de login.html do projeto.
 */
var formLogin = document.getElementById("formLogin");
var formCadastro = document.getElementById("formCadastro");

var btnLogin = document.getElementById("btnLogin");
var btnCadastar = document.getElementById("btnCadastrar");

/**
 * Código para exibir apenas um formulário por vez.
 */
formLogin.style.display = "block";
formCadastro.style.display = "none";

btnLogin.addEventListener("click", function () {
    formLogin.style.display = "block";
    formCadastro.style.display = "none";
});

btnCadastar.addEventListener("click", function () {
    formCadastro.style.display = "block";
    formLogin.style.display = "none";
});

/**
 * Código para cadastrar usuário e armazenar na localStorage do navegador.
 */
formCadastro.addEventListener("submit", function (e) {
    e.preventDefault();

    var usuariosCadastrados = localStorage.getItem("usuario");
    var objUsuariosCadastrados = [];

    if (usuariosCadastrados) {
        objUsuariosCadastrados = JSON.parse(usuariosCadastrados);
    }

    objUsuariosCadastrados.push({
        login: document.getElementById("loginCadastro").value,
        email: document.getElementById("emailCadastro").value,
        senha: document.getElementById("senhaCadastro").value
    })

    var usuarioJSON = JSON.stringify(objUsuariosCadastrados);
    localStorage.setItem("usuario", usuarioJSON);

    alert("Cadastro Realizado!");
    formCadastro.reset();
});

/**
 * Código para verificar os dados do usuário ao realizar Login.
 */
formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    var usuarioLogin = {
        login: document.getElementById("login").value,
        senha: document.getElementById("senha").value
    }

    var usuariosCadastradosJSON = JSON.parse(localStorage.getItem("usuario"));
    var usuarioValidado = false;

    for (var i in usuariosCadastradosJSON) {
        if (((usuarioLogin.login) == (usuariosCadastradosJSON[i].login)) && ((usuarioLogin.senha) == (usuariosCadastradosJSON[i].senha))) {
            usuarioValidado = true;
        }
    }

    if (usuarioValidado == true) {
        location.href = "index.html";
    } else {
        alert("Dados Incorretos!");
        formLogin.reset();
    } 
});