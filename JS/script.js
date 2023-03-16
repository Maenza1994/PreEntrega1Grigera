let opcion;

function ingresarValor(){
    opcion = prompt("Ingrese la opcion del producto que desea agregar al carrito: \n1) Camara Nikon - $165.000 \n2) Camara Canon - $135.960 \n3) Soporte Nikon - $27.055 \n4) Soporte Canon - $19.000 \n5) Memoria SD - $37.000 \n6) Finalizar compra");
};

function convertirANumero(texto){
    return parseFloat(texto);
};

function apretarBoton(){
    let monto = 0;
    let cantidad = 0;
    ingresarValor();
    while (opcion!="6"){
        switch (opcion){
            case "1":
                cantidad = convertirANumero(prompt("Ingrese cantidad"));
                monto+=(165000*cantidad);
                break;
            case "2":
                cantidad = convertirANumero(prompt("Ingrese cantidad"));
                monto+=(135960*cantidad);
                break;
            case "3":
                cantidad = convertirANumero(prompt("Ingrese cantidad"));
                monto+=(27055*cantidad);
                break;
            case "4":
                cantidad = convertirANumero(prompt("Ingrese cantidad"));
                monto+=(19000*cantidad);
                break;
            case "5":
                cantidad = convertirANumero(prompt("Ingrese cantidad"));
                monto+=(37000*cantidad);
                break;
            default:
                alert("Opción no valida")
        }
        ingresarValor();
    };

    alert("El monto total de tu compra es $" + monto); 

}


