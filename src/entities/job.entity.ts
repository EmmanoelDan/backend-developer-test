import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Status {
    DRAFT = "draft",
    PUBLISHED = "published",
    ARCHIVED = "archived",
    REJECTED = "rejected",

}

@Entity('jobs')
export class Job {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column('text',{nullable:true})
    company_id?: string;
    @Column('text',{nullable:true})
    title?: string;
    @Column('text',{nullable:true})
    description?: string;
    @Column('text',{nullable:true})
    location?: string;
    @Column('text',{nullable:true})
    notes?: string;
    @Column('enum',{enum:Status, default: Status.DRAFT})
    status?: Status;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at?: Date;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at?: Date;
}