import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class user{
    @ApiProperty({
        description: 'The id of the user',
        example: '1'
    })
    @PrimaryGeneratedColumn() 
    id: number;

    @ApiProperty({
        description: 'The username of the user',
        example: 'aditya'
    })
    @Column() 
    username: string;

    @ApiProperty({
        description: 'The password of the user',
        example: '1'
    })
    @Column()
    password: string;
    
}