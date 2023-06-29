import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Module } from './modules';



@Table({
    tableName: 'roles',
})
export class Role extends Model<Role> {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER,
    })
    id!: number;

    @Column(DataType.STRING)
    roleName!: string;
    
    @Column(DataType.STRING)
    description!: string;

    @HasMany(() => Module)
    modules!: Module[];
}