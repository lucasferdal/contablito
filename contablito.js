const ingresar = document.getElementById('submit');
const tabla = document.getElementById('tabla-cuerpo');
const ventas = document.getElementById('ventas');
const compras = document.getElementById('compras');
function escribirFila(descripcion,transaccion,subtotal,iva,total,comprasT,ventasT) {
tabla.innerHTML +=
    `    
    <tr>
        <td>${descripcion}</td>
        <td>${transaccion}</td>
        <td>${subtotal}$</td>
        <td>${iva}%</td>
        <td>${total}</td>
    </tr>
    `
compras.innerHTML = `${comprasT}$`;
ventas.innerHTML = `${ventasT}$`;
}

let comprasTotal = 0;
let ventasTotal = 0;

ingresar.addEventListener('click', function(){
    const descripcion = document.getElementById('descripcion').value;
    const transaccion = document.querySelector('input[name=tranza]:checked').value;
    let iva = document.querySelector('input[name=radios]:checked').value;
    const subtotal = document.getElementById("points").value;
    let total = subtotal; 

    if (iva === "Basico"){
        iva = 0.22;
    } else if (iva === "Minimo") {
        iva = 0.10;
    } else {
        iva = 0;
    }
    total *= (1+iva);

    if(transaccion === "compra"){
        comprasTotal += Math.floor(total);
    }
    else{
        ventasTotal += Math.floor(total);
    }

    escribirFila(descripcion,transaccion,subtotal,iva*100,Math.floor(total),comprasTotal,ventasTotal);
});

