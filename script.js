const corBody = document.body
const corDois = document.getElementById("dois")
const corTres = document.getElementById("tres")


function alterarModoNoturno(){
    corBody.style.backgroundImage = "linear-gradient(to right top, #16161a, #1c1c1f, #222225, #29292a, #2f2f30)";
    corBody.style.color = "#fffffe";
    const links = document.querySelectorAll("a");
    links.forEach(link => link.style.color = "#FAF7F0");    
}

function alterarModoDiurno() {
    corBody.style.backgroundImage = "radial-gradient(circle, #fffffe, #f5f7f5, #eaeeee, #e1e6e7, #d9dde1)";
    corBody.style.color = "#3C3D37";
    const links = document.querySelectorAll("a");
    links.forEach(link => link.style.color = "#3C3D37"); 
}