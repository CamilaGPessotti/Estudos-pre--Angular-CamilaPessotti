document.addEventListener("DOMContentLoaded", function () {
    const idSecao = localStorage.getItem("idSecao");
    const secao = document.querySelector(`#${idSecao}`);
    secao.style.display = 'block';
});















