var form = document.querySelector('#product-form');
var listaProductos = document.querySelector('#product-list');

class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var name = document.querySelector('#name').value;
    var price = document.querySelector('#price').value;
    var year = document.querySelector('#year').value;

    if (name == '' || price == '' || year == '') {

        document.querySelector('#msg').innerHTML = `
            <div class='btn btn-danger col-md-12 mt-3'>
                <P>Debes llenar todos los campos</P>
            </div>
        `
        setTimeout(() => {
            document.querySelector('#msg').innerHTML ='';
        }, 2500);

    } else {

        var item = new Product(name, price, year);

        var funcion = new Funciones()

        funcion.pintarDatos(item);

        form.reset();
    }

})


class Funciones {

    pintarDatos(item) {
        
        var div = document.createElement('div');

        div.classList = 'btn my-1 d-flex justify-content-between';

        div.innerHTML = `
            <strong>Producto: </strong> ${item.name}
            <strong>Precio US$:</strong> ${item.price}
            <strong>Año de fabricación:</strong> ${item.year}
            <div>
                <button class="btn btn-primary">O</button>
                <button class="btn btn-danger">X</button>
            </div>
        `
        listaProductos.appendChild(div)
    }

    eliminarDatos(datos) {
        datos.parentElement.remove();
    }

    completar(datos) {
        datos.parentElement.parentElement.classList.toggle('btn-success');
    }
}

listaProductos.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target.innerHTML == 'X') {

        var funcion = new Funciones()

        funcion.eliminarDatos(e.target.parentElement);

        document.querySelector('#msg').innerHTML = `
            <div class='btn btn-danger col-md-12 mt-3'>
                <P>Producto eliminado de manera satisfactoria</P>
            </div>
        `
        setTimeout(() => {
            document.querySelector('#msg').remove()
        }, 3000);

    } else if (e.target.innerHTML == 'O') {

        var completar = new Funciones();

        completar.completar(e.target);
    }

})