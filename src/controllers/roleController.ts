// roleController.ts
import { Request, Response } from 'express';
import * as roleService from '../services/roleService'

 

export const getAllRolesController = async (req: Request, res: Response) => {
  try {
    console.log("req obj =====================>",req?.tokenPayload?.tid)
    let tenant = req?.tokenPayload?.tid;

    const roles = await roleService.getAllRoles(tenant);
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};