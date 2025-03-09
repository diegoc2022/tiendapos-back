export class RegistraVentasDto{
   
    id:number;
    id_caja:number;  
    id_venta:string;   
    codProd:string;    
    descripcion:string;   
    existencia:number;    
    cantidad:number; 
    precio_compra:number;  
    precio_venta:number;   
    origen_venta:string;
    subtotal:number;
    vendedor:string;
    estado:string;
    factura:number;
    venta_por_und:boolean;
    fecha_registro:string;
    hora_registro:string;

}