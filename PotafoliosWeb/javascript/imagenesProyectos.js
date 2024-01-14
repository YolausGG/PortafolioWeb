let imgsCarruselPrueba = [
    "/img/imgInfoEcommerceLogos.png",
    "/img/fichaBovino.png",
    "/img/HTMLLogo.png"
]

console.log(imgsCarruselPrueba);
console.log(imgsCarruselPrueba.length);

let img = document.getElementById("idImgCarrusel")
let atras = document.getElementById("atras")
let adelante = document.getElementById("adelante")
let actual = 0;


atras.addEventListener('click', function () {
    actual -= 1

    if (actual == -1) {
        actual = imgsCarruselPrueba.length - 1
    }

    img.innerHTML = `<img class="imgCarrusel" src="${imgsCarruselPrueba[actual]}" alt="Imagen del Carrusel" loading="lazy">`
})

adelante.addEventListener('click', function () {
    actual += 1

    if (actual == imgsCarruselPrueba.length) {
        actual = 0
    }

    img.innerHTML = `<img class="imgCarrusel" src="${imgsCarruselPrueba[actual]}" alt="Imagen del Carrusel" loading="lazy">`
})