// src/controllers/tabAccessController.ts

 

import { Request, Response } from 'express';
// import { CustomRequest as Request } from '../types/express';
import { sendSuccessResponse, sendErrorResponse } from '../utils/responseFormatter';



 

export async function getTabAccessByRole(req: Request, res: Response) {
  const userRole  = req?.tokenPayload?.userRole??[];
  // console.log("req?.tokenPayload------->",req.pool)
  console.log("userRole2------->",userRole)

  try {
      const client = await req.pool.connect();

      try {
        // const result = await client.query('SELECT * FROM cancer_cohort_data limit 2');
        //const result = await client.query('CREATE TABLE IF NOT EXISTS abcd.testTable ( id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL )');
        const result = await client.query('CREATE TABLE IF NOT EXISTS abcd.Role (id INT PRIMARY KEY,role_name VARCHAR(50) NOT NULL)');
        const result1 = await client.query('CREATE TABLE IF NOT EXISTS abcd.Module (id INT PRIMARY KEY,module_name VARCHAR(50) NOT NULL,description VARCHAR(255),role_id INT,FOREIGN KEY (role_id) REFERENCES abcd.Role(id))');
        const result2 = await client.query('CREATE TABLE IF NOT EXISTS abcd.Submodule (id INT PRIMARY KEY,submodule_name VARCHAR(50) NOT NULL,submodule_desc VARCHAR(255),module_id INT,role_id INT,FOREIGN KEY (module_id) REFERENCES abcd.Module(id),FOREIGN KEY (role_id) REFERENCES abcd.Role(id));');
        console.log("result====>",result)
        // res.json(result.rows);
        sendSuccessResponse(res, result.rows, 'Tab access retrieved successfully');

      } finally {
        // Always release the client before any error handling,
        // just in case the error handling itself throws an error.
        client.release();
      }
    } catch (err) {
      console.error(err);
      sendErrorResponse(res, `No tab access found for role ${userRole}`);
      // res.status(500).json({ error: 'Failed to connect to database' });
    }


  // Filter tabAccessData based on the provided role
  // const filteredTabAccess = tabAccessData.filter(tab => tab.roles.includes(userRole[0]));

 

  // if (filteredTabAccess.length === 0) {
  //   sendErrorResponse(res, `No tab access found for role ${userRole}`);
  //   return;
  // }

 

  // Sort the filteredTabAccess based on role_order and order properties
  // const sortedTabAccess = filteredTabAccess.sort((a, b) => {
  //   if (a.role_order === b.role_order) {
  //     return a.order - b.order;
  //   }
  //   return a.role_order - b.role_order;
  // });

 

  // sendSuccessResponse(res, sortedTabAccess, 'Tab access retrieved successfully');
}