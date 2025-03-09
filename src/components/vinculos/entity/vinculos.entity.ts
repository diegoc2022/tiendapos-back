import { VentaProductosEntity } from "src/components/venta-productos/entity/venta-productos.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity({name:'tbl_vinculos'})
export class VinculosEntity {
  
   @PrimaryGeneratedColumn('increment')    
   id:number;

   @Column()
   codigoInicial:string;

   @Column()   
   codigoVinculo:string;  
   
   @ManyToOne((type) => VentaProductosEntity, (cod) => cod.codigoVinculo)
    @JoinColumn({name:'codigoVinculo'})
    producto: VentaProductosEntity[]; //Usuario relac
        

}
