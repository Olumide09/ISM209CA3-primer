import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class LinkedIdentity {
    @PrimaryGeneratedColumn()
    NIN: number;

    @Column({ nullable: true})
    BVN: number;

    @Column({nullable: true})
    MobileNumber: number;
    
}
