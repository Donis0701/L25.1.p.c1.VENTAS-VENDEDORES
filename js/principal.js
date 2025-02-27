/*Se conoce el monto de ventas de varios vendedores. Se desea conocer la cantidad de ventas
que fueron por 100$ o menos, cantidad de ventas mayores a 100$. Asimismo, se desea saber el
monto total en $ de todas las ventas.
Se dispone de los siguientes datos de varias vendedores: (nombre, monto venta)
(Mary, 150), (José, 135), (Carlos, 160), (Pedro, 75)
Cantidad de ventas que fueron por 100$ o menos: 1
Cantidad de ventas mayores a 100$: 3
Monto total de las ventas: 520$*/
import cl_mVenta from "./cl_mVenta.js";
import cl_vVenta from "./cl_vVenta.js";
import cl_controlador from "./cl_controlador.js";
export default class principal{
    constructor(){
        let modelo = new cl_mVenta();
        let vista = new cl_vVenta();
        let controlador = new cl_controlador(modelo, vista);
        vista.controlador = controlador;
    }
}

