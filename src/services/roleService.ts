// roleService.ts
import { Role } from '../models/roles';
import sequelize  from '../models/index';
 

export async function getAllRoles(tenantId: any)  {
  // console.log("options===>",options)
  // const roles = await Role.findAll(options);
  // return roles;

  // const query = `SELECT * FROM "${tenantId}"."roles";`;
  const query = `SELECT * FROM roles;`;
  const roles = await sequelize.query(query);
  return roles;
};


