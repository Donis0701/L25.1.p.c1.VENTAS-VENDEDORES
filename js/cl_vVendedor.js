export default class cl_vVendedor{
    constructor(){
        this.inNombre = document.getElementById("vendedorForm_inNombre");
        this.inMontoV = document.getElementById("vendedorForm_inMontoV");
        this.btProcesar = document.getElementById("vendedorForm_btProcesar");
    }
    get nombre(){
        return this.inNombre.value;
    }
    get montoV(){
        return +this.inMontoV.value;
    }
}