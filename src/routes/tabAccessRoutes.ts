// src/routes/tabAccessRoutes.ts

 

import express, { Request, Response } from 'express';
import {verifyToken} from '../middleware/authCheck'
import { authorizeRoles } from '../middleware/auth/roleAuthMiddleware';
import { getTabAccessByRole } from '../controllers/tabAccessController';
// import dbCall from '../middleware/dbCall';
// import {getPool} from '../utils/db/postgres/devDb';

const router = express.Router();
router.get('/',verifyToken,authorizeRoles(['Admin', 'Manager','TestingMT']),getTabAccessByRole);

 

export default router;