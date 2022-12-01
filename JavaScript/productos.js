const imagenes = document.querySelectorAll('img');
const btnTodo = document.querySelector('.todos');
const btnCollares = document.querySelector('.collares');
const btnPeinados = document.querySelector('.peinados');
const btnPulseras = document.querySelector('.pulseras');
const contenedorProductos = document.querySelector('.productos');
document.addEventListener('DOMContentLoaded',()=>{
    productos();
});

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const imagen = entry.target;
            imagen.scr = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    }); 
});

imagenes.forEach(imagen => {
    observer.observe(imagen)
});

const productos = () =>{
    let productosArreglo = [];
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto=> productosArreglo = [...productosArreglo,producto]);

    const collares = productosArreglo.filter(collar=> collar.getAttribute('data-producto') === 'collar');
    const peinados = productosArreglo.filter(peinado => peinado.getAttribute('data-producto') === 'peinado');
    const pulseras = productosArreglo.filter(pulsera => pulsera.getAttribute('data-producto') === 'pulsera');

    mostrarProductos(collares, peinados, pulseras, productosArreglo);
}

const mostrarProductos = (collares, peinados, pulseras, todos) =>{
    btnCollares.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        collares.forEach(collar=> contenedorProductos.appendChild(collar));
    });

    btnPeinados.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
         peinados.forEach(peinado=> contenedorProductos.appendChild(peinado));
    });

    btnPulseras.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        pulseras.forEach(pulsera=> contenedorProductos.appendChild(pulsera));
    });

    btnTodo.addEventListener('click',()=>{
        limpiarHtml(contenedorProductos);
        todos.forEach(todo=> contenedorProductos.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}