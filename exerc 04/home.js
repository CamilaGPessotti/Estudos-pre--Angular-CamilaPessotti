var categorias = []

document.addEventListener("DOMContentLoaded", function () {

    pegarTraco()
    setCategorias()

});

function pegarTraco() {
    if (window.location.href == "http://127.0.0.1:5500/exerc%2004/home.html") {

        document.getElementById('traco').classList.add('tracinho')
    } else {
        document.getElementById('traco').classList.remove('tracinho')
    }

    if (window.location.href == "http://127.0.0.1:5500/exerc%2004/index.html") {

        document.getElementById('traco').classList.remove('tracinho')
    }
}



function myFunction(id) {
    localStorage.idSecao = id;
}

const select = document.querySelector('#select');

select.addEventListener('change', (evento) => {
    const valor = evento.target.value;

    myFunction(valor);

    window.location.href = 'index.html';
})

// document.getElementById("select").innerHTML = htmlSel


function getAllNoticias() {
    $.ajax({
        url: 'http://localhost:3000/noticias',
        type: 'GET',
        headers: {
            "accept": "application/json"
        },
        success: function (noticias) {
            console.log(noticias)
            let htmlNoticias = ''
            for (let noticia of noticias) {
                htmlNoticias += `
                 <a href="./index.html" onclick="myFunction('txt1');" class="section2" style="background-image:url('${noticia.img}')">
                <span id="txt1">
                    ${noticia.dataPublicacao.split('-').reverse().join('/')}
                </span>
                <h1>${noticia.titulo} </h1>
                
                <h3>${findCateg(noticia.categoria)}</h3>
                
                <h5> ${noticia.autor}i</h5>
                
            </a>
                         `
            }
            document.querySelector(".cont2").innerHTML = htmlNoticias
        },
        error: function (erro) {
            console.log(erro)
        }
    }
    )
}

function setCategorias() {
    $.ajax({
        url: 'http://localhost:3000/categorias',
        type: 'GET',
        headers: {
            "accept": "application/json"
        },
        success: function (categs) {
            console.log(categs)
            categorias = categs
            getAllNoticias()
        },
        error: function (erro) {
            console.log(erro)
        }
    }
    )
}

function findCateg(id) {

    for (let categ of categorias) {
        if (categ.id == id)
            return categ.nome
    }

}