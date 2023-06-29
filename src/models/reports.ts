import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Module } from './modules';
import { Role } from './roles';

 

@Table({
  tableName: 'reports',
})
export class Report extends Model<Report> {
  @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER,
    })
    id!: number;

 

  @Column(DataType.STRING)
    reportname!: string;

 

  @Column(DataType.STRING)
    reportdesc!: string;

 

  @ForeignKey(() => Module)
    @Column(DataType.INTEGER)
    moduleId!: number;

 

  @Column(DataType.STRING)
    slugName!: string;

 

  @Column(DataType.STRING)
    path!: string;

 

  @ForeignKey(() => Role)
    @Column(DataType.INTEGER)
    roleId!: number;

 

  @BelongsTo(() => Module)
    module!: Module;

 

  @BelongsTo(() => Role)
    role!: Role;
}
