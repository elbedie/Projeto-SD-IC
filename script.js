const corBody = document.body
const corDois = document.getElementById("dois")
const corTres = document.getElementById("tres")


function alterarModoNoturno(){
    corBody.style.backgroundColor = "#3C3D37";
    corBody.style.color = "#FAF7F0";
    const links = document.querySelectorAll("a");
    links.forEach(link => link.style.color = "#FAF7F0");    
    corDois.style.backgroundColor = "#FAF7F0";
    corDois.style.color = "#4A4947";
    corTres.style.backgroundColor = "#FAF7F0";
    corTres.style.color = "#4A4947";
}

function alterarModoDiurno() {
    corBody.style.backgroundColor = "#FAF7F0"; // Fundo claro
    corBody.style.color = "#3C3D37"; // Texto escuro
    const links = document.querySelectorAll("a");
    links.forEach(link => link.style.color = "#FAF7F0"); // Links escuros
    
    corDois.style.backgroundColor = "#3C3D37"; // Seção "dois" com fundo escuro
    corDois.style.color = "#FAF7F0"; // Texto claro

    corTres.style.backgroundColor = "#3C3D37"; // Seção "três" com fundo escuro
    corTres.style.color = "#FAF7F0"; // Texto claro
}