import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class CitizensBiodatum {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    middleName: string;

    @Column()
    lastName: string;

    @Column()
    dateOfBirth: Date;

    @Column()
    Nationality: string;

    @Column()
    countryOfbirth: string;

    @Column()
    townOfbirth: string;

    @Column()
    stateOfbirth: string;

    @Column()
    ResidenceAddress: string;

    @Column()
    Profession: string;

}
