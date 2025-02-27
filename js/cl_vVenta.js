import cl_mVendedor from "./cl_mVendedor.js";
import cl_vVendedor from "./cl_vVendedor.js";
export default class cl_vVenta{
    constructor(){
        this.controlador = null;
        this.salida = document.getElementById("mainForm_salida");
        this.vVendedor = new cl_vVendedor();
        this.vVendedor.btProcesar.onclick = () => this.controlador.procesarVendedor();
    }
    procesarVendedor(){
        this.mVendedor = new cl_mVendedor({
            nombre: this.vVendedor.nombre, 
            montoV: this.vVendedor.montoV});
        return this.vVendedor;
    }
    reportarVenta(montoVendido, cantMN100, cantMY100){
        this.salida.innerHTML = `Cantidad de ventas que fueron por 100$ o menos: ${cantMN100}<br>
        Cantidad de ventas mayores a 100$: ${cantMY100}<br>
        Monto total de las ventas: ${montoVendido}$`;
    }
    
}