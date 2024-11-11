document.getElementById("tema").addEventListener("click", cambiarTema);

function cambiarTema() {

    let src = document.getElementById("temaImg").src;

    if (src.includes("sol.png")) {
        document.getElementById("temaImg").src = "img/luna.png";
        document.getElementById("body").removeAttribute("class");
        document.getElementById("body").classList.add("temaClaro");
        document.getElementById("githubIcon").src = "img/githubB.png";
        cambiarBorder();
        cambiarEnlaces();
        cambiarTemaProyectos();
        cambiarTemaSelector();    
    } else {
        document.getElementById("temaImg").src = "img/sol.png";
        document.getElementById("body").removeAttribute("class");
        document.getElementById("body").classList.add("temaOscuro");
        document.getElementById("githubIcon").src = "img/githubW.png";
        cambiarBorder();
        cambiarEnlaces();
        cambiarTemaProyectos();  
        cambiarTemaSelector();
    }


}

function cambiarBorder() {
    let containerIdes = document.getElementById("logos");
    let arrayDivs = containerIdes.querySelectorAll("div");
    let containerTech = document.getElementById("tech");
    let techDivs = containerTech.querySelectorAll("div");
    arrayDivs.forEach(div => {
        if (div.className === "border-W") {
            div.removeAttribute("class");
            div.classList.add("border-B")
        } else {
            div.removeAttribute("class");
            div.classList.add("border-W")
        }
    });

    techDivs.forEach(div => {
        if (div.className === "border-W") {
            div.removeAttribute("class");
            div.classList.add("border-B")
        } else {
            div.removeAttribute("class");
            div.classList.add("border-W")
        }

    });

}

function cambiarEnlaces() {
    let contenedorEnlaces = document.getElementById("body");
    let enlaces = contenedorEnlaces.querySelectorAll("a");
    let idioma = document.getElementById("lenguaje");

    enlaces.forEach(a => {
        if (a.className.includes("temaOscuroLetra")) {
            a.classList.remove("temaOscuroLetra");
            a.classList.add("temaClaroLetra");
        } else {
            a.classList.remove("temaClaroLetra");
            a.classList.add("temaOscuroLetra");
        }
    });

    if (idioma.className.includes("temaOscuroLetra")) {
        idioma.classList.remove("temaOscuroLetra");
        idioma.classList.add("temaClaroLetra");
    } else {
        idioma.classList.remove("temaClaroLetra");
        idioma.classList.add("temaOscuroLetra");
    }


}


// FUNCION CAMBIAR TEMA ENLACES PROYECTOS

function cambiarTemaProyectos() {
    let containerProyectos = document.getElementById("containerProyectos");
    let enlacesProyectos = containerProyectos.querySelectorAll("div");
    let parrafosProyecto = containerProyectos.querySelectorAll("p");

    enlacesProyectos.forEach(div => {
        if (div.className.includes("border-B")) {
            div.classList.remove("border-B");
            div.classList.add("border-W");
        } else {
            div.classList.remove("border-W");
            div.classList.add("border-B");
        }
    });

    parrafosProyecto.forEach(a => {
        if (a.className.includes("temaOscuroLetra")) {
            a.classList.remove("temaOscuroLetra");
            a.classList.add("temaClaroLetra");
        } else {
            a.classList.remove("temaClaroLetra");
            a.classList.add("temaOscuroLetra");
        }
    });

}

// CAMBIAR TEMA SELECTOR
function cambiarTemaSelector() {
    let selector = document.getElementById("repositorios");
    if (selector.className.includes("selectorOscuro")) {
        selector.classList.remove("selectorOscuro");
        selector.classList.add("selectorClaro");
    } else {
        selector.classList.remove("selectorClaro");
        selector.classList.add("selectorOscuro");
    }
}

// FUNCION PARA DESCARGAR EL CV
document.getElementById("cv").addEventListener("click", descargarCV);

function descargarCV() {
    let enlaceCv = document.getElementById("cv");
    enlaceCv.download = "CV Alberto Sanchez Macias.pdf";
}


// DESPLAZAMIENTO SUAVE DE SCROLL
document.getElementById("enlaceJS").addEventListener('click',scrollSuave);
document.getElementById("enlaceEstudio").addEventListener("click",scrollSuave);

function scrollSuave(event) {
    event.preventDefault();
    let targetID = this.getAttribute('href');
    let targetElement = document.querySelector(targetID)
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

// CAMBIAR IDIOMA
document.getElementById("lenguaje").addEventListener("click", ()=>{

    let idioma = document.getElementById("lenguaje");
    let lenguaje = document.getElementById("html");

    if(idioma.innerHTML === "Es"){
        document.getElementById("lenguaje").innerHTML = "En";
        lenguaje.lang = "en";
    }else{
        document.getElementById("lenguaje").innerHTML = "Es";
        lenguaje.lang = "es";
    } 
});

function contadorProyectos() {

    let numProyectos = document.getElementById("proyectosJS").querySelectorAll("a");
    document.getElementById("tituloProyectos").innerHTML = `Proyectos JS(${numProyectos.length})`;

}

contadorProyectos();

// FUNCIÓN REDIRIGIR A REPOSITORIO

document.getElementById("repositorios").addEventListener("change",irARepositorio);

function irARepositorio() {
    let selector = document.getElementById("repositorios");
    let enlace = selector.value;
    if (enlace) {
        //window.location.href = enlace;
        window.open(enlace, '_blank');
    }
}
