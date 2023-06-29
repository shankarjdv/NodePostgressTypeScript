// src/middleware/roleAuthMiddleware.ts

 

import { Response,Request, NextFunction } from 'express';
// import { CustomRequest as Request} from '../../types/express';

 

export function authorizeRoles(allowedRoles: string[]) {
  return function(req: Request, res: Response, next: NextFunction) {
    // console.log("req.tokenPayload",req.tokenPayload)
    // Perform role authorization logic here
    // For example, check if the user's role is allowed
    const {roles} : any = req.tokenPayload; // Assuming you have a user object with a 'role' property
    // console.log("roles:==>",roles)

    const isAuthorized = roles.some((role: string) => allowedRoles.includes(role));
     if (!isAuthorized) { 
       res.status(403).json({ message: 'Forbidden' }); 
       return; 
     }
    
    // if (!allowedRoles.includes(userRole)) {
    //   res.status(403).json({ message: 'Forbidden' });
    //   return;
    // }
    next();
  };
}