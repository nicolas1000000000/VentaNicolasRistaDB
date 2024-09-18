function ObtenerClientes(){
    fetch('https://localhost:7134/Clientes')
    .then(response => response.json())
    .then(data => MostrarClientes(data))
    .catch(error => console.log("No se pudo acceder al servicio",error))
}
function ObtenerProductos(){
    fetch('https://localhost:7134/Productos')
    .then(response => response.json())
    .then(data => MostrarProductos(data))
    .catch(error => console.log("No se pudo acceder al servicio",error))
}


function MostrarClientes(data) {
    const Clientesbody = document.getElementById('Clientestable');
    Clientesbody.innerHTML = '';

    data.forEach(element => {
        let tr = Clientesbody.insertRow();

        let td0 = tr.insertCell(0);
        let  = document.createTextNode(element.Id);
        td0.appendChild(tdId);

        let td1 = tr.insertCell(1);
        let tdnombre = document.createTextNode(element.nombrecliente);
        td1.appendChild(tdnombre);

        let td2 = tr.insertCell(2);
        let tdApellido = document.createTextNode(element.ApellidoCliente);
        td3.appendChild(tdApellido);

        let td3 = tr.insertCell(3);
        let tdDni = document.createTextNode(element.Dni);
        td4.appendChild(tdDni);

        let td4 = tr.insertCell(4);
        let tdId = document.createTextNode(element.Saldo);
        td4.appendChild(tdSaldo);
    });
}

function MostrarProductos (data) {

    const Productosbody = document.getElementById('Productostable');
    Productosbody.innerHTML = '';

    data.forEach(element => {
        let tr = Productosbody.insertRow();

        let td0 = tr.insertCell(0);
        let  = document.createTextNode(element.Id);
        td0.appendChild(tdId);

        let td1 = tr.insertCell(1);
        let tdNombre = document.createTextNode(element.NombreProducto);
        td1.appendChild(tdNombre);

        let td2 = tr.insertCell(2);
        let tdCantidad = document.createTextNode(element.Cantidad);
        td3.appendChild(tdCantidad);

        let td3 = tr.insertCell(3);
        let tdPrecioVenta = document.createTextNode(element.PrecioVenta);
        td4.appendChild(tdPrecioVenta);

        let td4 = tr.insertCell(4);
        let tdPrecioCompra = document.createTextNode(element.tdPrecioCompra);
        td4.appendChild(tdPrecioCompra);
    });

}