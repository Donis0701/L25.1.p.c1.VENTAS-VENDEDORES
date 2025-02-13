export default class cl_Vendedor {
    constructor(nombre,montoV){
        this._nombre = nombre;
        this._montoV = montoV;
    }
    set nombre(n){
        this._nombre = n;
    }
    get nombre(){
        return this._nombre;
    }
    set montoV(m){
        this._montoV = +m;
    }
    get montoV(){
        return this._montoV;
    }
}