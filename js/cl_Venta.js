export default class cl_Venta {
    constructor(){
        this.cntMY100 = 0;
        this.cntMN100 = 0;
        this.acumV = 0;
    }
    procesarVendedor(vendedor){
        if(vendedor.montoV <= 100){
            this.cntMN100++;
        }else{
            this.cntMY100++;
        }
        this.acumV += vendedor.montoV;
    }
    montoVendido(){
        return this.acumV;
    }
    cantMY100(){
        return this.cntMY100;
    }
    cantMN100(){
        return this.cntMN100;
    }
}