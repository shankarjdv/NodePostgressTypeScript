import { Table, Column, Model, DataType } from 'sequelize-typescript';

 

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

 

  @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

 

  // Add more columns and relationships as needed
}