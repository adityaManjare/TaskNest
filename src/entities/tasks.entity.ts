import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class tasks{
    @PrimaryGeneratedColumn()
    taskid : number;
    
    @Column()
    map_id :number;

    @Column()
    task: string;
    
    @Column()
    status: string;

    @CreateDateColumn({ type: 'timestamp' })  
    createdAt: Date;
}