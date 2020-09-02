/**
 * Código JS da página index.html do projeto.
 */
var formCadastroLivro = document.getElementById("formCadastroLivro");
var listarLivros = document.getElementById("listarLivros");

var btnCadastrarLivro = document.getElementById("btnCadastrarLivro");
var btnListarLivros = document.getElementById("btnListarLivros");

/**
 * Código para exibir apenas conteúdo de Listar Livros ou
 * Cadastrar Livro, um por vez. 
 */
listarLivros.style.display = "none";
formCadastroLivro.style.display = "block";

btnCadastrarLivro.addEventListener("click", function () {
    formCadastroLivro.style.display = "block";
    listarLivros.style.display = "none";
});

btnListarLivros.addEventListener("click", function () {
    listarLivros.style.display = "block";
    formCadastroLivro.style.display = "none";
});

/**
 * Código para adicionar array de livros no localStorage.
 */
formCadastroLivro.addEventListener("submit", function (e) {
    e.preventDefault();

    var livrosCadastrados = localStorage.getItem("livrosCadastrados");
    var objLivrosCadastrados = [];

    if (livrosCadastrados) {
        objLivrosCadastrados = JSON.parse(livrosCadastrados);
    }

    objLivrosCadastrados.push({
        titulo: document.getElementById("titulo").value,
        categoria: document.getElementById("categoria").value,
        ano: document.getElementById("ano").value,
        autor: document.getElementById("autor").value
    })

    var livrosCadastradosJSON = JSON.stringify(objLivrosCadastrados);
    localStorage.setItem("livrosCadastrados", livrosCadastradosJSON);

    alert("Livro Cadastrado!");
    formCadastroLivro.reset();
});

/**
 * Código para listar os livros cadastrados.
 */
btnListarLivros.addEventListener("click", function (e) {
    e.preventDefault();
    
    var listaLivros = JSON.parse(localStorage.getItem("livrosCadastrados"));

    for (var i in listaLivros) {
        var tituloLista = listaLivros[i].titulo;
        var categoriaLista = listaLivros[i].categoria;
        var anoLista = listaLivros[i].ano;
        var autorLista = listaLivros[i].autor;
        var livro = ("Título: " + tituloLista + " / "
            + "Categoria: " + categoriaLista + " / "
            + "Ano: " + anoLista + " / "
            + "Autor: " + autorLista);

        var listaHTML = document.getElementById("listaDeLivros");
        var liNovoLivro = document.createElement("li");
        var textoNovoLivro = document.createTextNode(livro);

       
        liNovoLivro.appendChild(textoNovoLivro);
        listaHTML.appendChild(liNovoLivro);
    }
});


