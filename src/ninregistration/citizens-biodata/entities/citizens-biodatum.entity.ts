import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class CitizensBiodatum {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true} )
    firstName: string;

    @Column({nullable:true} )
    middleName: string;

    @Column()
    lastName: string;

    @Column()
    dateOfBirth: Date;

    @Column({nullable:true} )
    Nationality: string;

    @Column( {nullable:true} )
    countryOfbirth: string;

    @Column({nullable:true} )
    townOfbirth: string;

    @Column({nullable:true} )
    stateOfbirth: string;

    @Column({nullable:true} )
    ResidenceAddress: string;

    @Column({nullable:true} )
    Profession: string;

}
