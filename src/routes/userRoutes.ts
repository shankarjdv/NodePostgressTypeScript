import express from 'express';

import {verifyToken} from '../middleware/authCheck'
import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';



const router = express.Router();

// const jwtCheck = jwt({
//       secret: jwksRsa.expressJwtSecret({
//         jwksUri: 'https://login.microsoftonline.com/{your-tenant-id}/discovery/v2.0/keys',
//       }),
//       audience: '{your-audience}',
//       issuer: 'https://login.microsoftonline.com/{your-tenant-id}/v2.0',
//       algorithms: ['RS256'],
//     });




// router.get('/', verifyToken, userController.getUsers);

// router.get('/:id', userController.getUserById);

// router.post('/', userController.createUser);

// router.put('/:id', userController.updateUser);

// router.delete('/:id', userController.deleteUser);




export default router;