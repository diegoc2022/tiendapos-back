import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tbl_secuencias'})
export class IdSecuenciaEntity{

    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({nullable:true})
    prefijo:string;

    @Column({nullable:true})
    nombre:string;

    
    @Column({nullable:true})
    id_secuencia:number;    
   
}