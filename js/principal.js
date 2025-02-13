/*Se conoce el monto de ventas de varios vendedores. Se desea conocer la cantidad de ventas
que fueron por 100$ o menos, cantidad de ventas mayores a 100$. Asimismo, se desea saber el
monto total en $ de todas las ventas.
Se dispone de los siguientes datos de varias vendedores: (nombre, monto venta)
(Mary, 150), (José, 135), (Carlos, 160), (Pedro, 75)
Cantidad de ventas que fueron por 100$ o menos: 1
Cantidad de ventas mayores a 100$: 3
Monto total de las ventas: 520$*/
import cl_Venta from "./cl_Venta.js";
import cl_Vendedor from "./cl_Vendedor.js";

let vendedor1 = new cl_Vendedor("Mary", 150);
let vendedor2 = new cl_Vendedor("Jose", 135);
let vendedor3 = new cl_Vendedor("Carlos", 160);
let vendedor4 = new cl_Vendedor("Pedro", 75);

let venta = new cl_Venta();
venta.procesarVendedor(vendedor1);
venta.procesarVendedor(vendedor2);
venta.procesarVendedor(vendedor3);
venta.procesarVendedor(vendedor4);

let salida = document.getElementById("salida");
salida.innerHTML = `Cantidad de ventas que fueron por 100$ o menos: ${venta.cantMN100()}<br>
Cantidad de ventas mayores a 100$: ${venta.cantMY100()}<br>
Monto total de las ventas: ${venta.montoVendido()}$`;