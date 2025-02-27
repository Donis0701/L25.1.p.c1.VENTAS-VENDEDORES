export default class cl_controlador {
    constructor(modelo,vista){
        this.modelo = modelo;   
        this.vista = vista;
    }
    procesarVendedor(){
        this.modelo.procesarVendedor(this.vista.procesarVendedor());
        this.vista.reportarVenta(this.modelo.montoVendido(), this.modelo.cantMN100(), this.modelo.cantMY100());
    }
}