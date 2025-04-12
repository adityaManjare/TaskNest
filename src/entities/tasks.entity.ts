import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class tasks{
    @ApiProperty({
        description: 'The id of the task',
        example: '1'
    })
    @PrimaryGeneratedColumn()
    taskid : number;

    @ApiProperty({
        description: 'The id of the user',
        example: '1'
    })
    @Column()
    map_id :number;

    @ApiProperty({
        description: 'The task of the user',
        example: 'git commit is to nerfed lets commit sucide instead'
    })
    @Column()
    task: string;
    
    @Column()
    status: string;
    
    @ApiProperty({
        description: 'The created at date of the task',
        example: '2021-01-01'
    })
    @CreateDateColumn({ type: 'timestamp' })  
    createdAt: Date;
}