// model/index.ts
import { Sequelize } from 'sequelize-typescript';
import config from '../config/config';
import { Role } from './roles';
import { Module } from './modules';
import { SubModule } from './subModules';
import { Report } from './reports';
 

const env: string = "development"; //process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

 

// Define your models
// For example:
sequelize.addModels([Role,Module,SubModule,Report]);

 

export default sequelize;