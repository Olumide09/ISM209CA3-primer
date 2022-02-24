import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class CitizensBiodatum {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column({ nullable: true })
    middleName: string;

    @Column()
    lastName: string;

    @Column({ nullable: true })
    dateOfBirth: Date;

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
