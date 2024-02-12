import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('companies')
export class Company {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{nullable:true})
    name: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at!: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at!: Date;

}