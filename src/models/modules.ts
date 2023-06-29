import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Role } from './roles';
import { SubModule } from './subModules';
import { Report } from './reports';

 

@Table({
  tableName: 'modules',
})
export class Module extends Model<Module> {
  @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER,
    })
    id!: number;

 

  @Column(DataType.STRING)
    module_name!: string;

 

  @Column(DataType.STRING)
    desc!: string;

 

  @Column(DataType.STRING)
    slugName!: string;

 

  @Column(DataType.STRING)
    path!: string;

 

  @ForeignKey(() => Role)
    @Column(DataType.INTEGER)
    roleId!: number;

 

  @BelongsTo(() => Role)
    role!: Role;

 

  @HasMany(() => SubModule)
    subModules!: SubModule[];

 

  @HasMany(() => Report)
    reports!: Report[];
}