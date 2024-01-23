let imgsCarruselGDB = [
    "/img/HerramientasGDB.webp",
    "/img/fichaBovino.webp",
    "/img/MySQLLogo.webp",
]
let imgsCarruselEcommerce = [
    "/img/HerramientasEcommerce.webp",
    "/img/ReactLogo.webp",
    "/img/NodeJsLogo.webp",
    "/img/MySQLLogo.webp"    
]
let imgsCarruselProyectosDuranteLaCarrera = [
    "/img/HerramientasProyectosDutanteLaCarrera.webp",
    "/img/imgMutualistaSF.webp",
    "/img/fichaBovino.webp",
    "/img/HTMLLogo.webp"
]
let imgsCarruselPortafoliosWeb = [
    "/img/HerramientasPortafoliosWeb.webp",
    "/img/HTMLLogo.webp",
    "/img/CSSLogo.webp",
    "/img/JSLogo.webp"   
]

cargarCarrusel = (nameProject) => {

    let img = document.getElementById(`idImgCarrusel${nameProject}`)
    let atras = document.getElementById(`atras${nameProject}`)
    let adelante = document.getElementById(`adelante${nameProject}`)
    let actual = 0;

    console.log(nameProject);

    let selectImgsCarrusel = []
    
    switch (nameProject) {
        case "GDB":
            selectImgsCarrusel = imgsCarruselGDB
            break;
        case "ECommerce":
            selectImgsCarrusel = imgsCarruselEcommerce
            break;
        case "ProyectosDuranteLaCarrera":
            selectImgsCarrusel = imgsCarruselProyectosDuranteLaCarrera
            break;
        case "PortafoliosWeb":
            selectImgsCarrusel = imgsCarruselPortafoliosWeb
            break;
        default:
            break;
    }

    atras.addEventListener('click', function () {
        actual -= 1

        if (actual == -1) {
            actual = selectImgsCarrusel.length - 1
        }

        img.innerHTML = `<img class="imgCarrusel" src="${selectImgsCarrusel[actual]}" alt="Imagen del Carrusel" loading="lazy">`
    })

    adelante.addEventListener('click', function () {
        actual += 1

        if (actual == selectImgsCarrusel.length) {
            actual = 0
        }

        img.innerHTML = `<img class="imgCarrusel" src="${selectImgsCarrusel[actual]}" alt="Imagen del Carrusel" loading="lazy">`
    })
}