let imgsCarruselPrueba = [
    "/img/imgInfoEcommerceLogos.png",
    "/img/fichaBovino.png",
    "/img/HTMLLogo.png"
]
let imgsCarruselGDB = [    
    "/img/HerramientasGDB.webp",
    "/img/fichaBovino.png",
    "/img/MySQLLogo.png",
]
let imgsCarruselEcommerce = [
    "/img/ReactLogo.png",
    "/img/NodeJsLogo.png",
    "/img/MySQLLogo.png",
    "/img/HerramientasEcommerce.webp"
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
        case "Prueba":
            selectImgsCarrusel = imgsCarruselPrueba
            break;
        default:
            break;
    }


    console.log(selectImgsCarrusel);

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