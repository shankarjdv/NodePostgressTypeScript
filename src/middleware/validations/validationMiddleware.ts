
// src/middleware/validationMiddleware.ts

 

import { Request, Response, NextFunction } from 'express';

import Joi from 'joi';

import { sendErrorResponse } from '../../utils/responseFormatter';

 

const configDataSchema = Joi.array().items(

  Joi.object({

    Business_Friendly_Name: Joi.string().required(),
    Cohort_Tag: Joi.string().required(),
    Data_Type: Joi.string().required(),
    Dimension: Joi.string().required(),
    Field_Id: Joi.string().required(),
    Field_Name: Joi.string().required(),
    Frontend_Flag: Joi.string().required(),
    Input: Joi.string().required(),
    Input_database: Joi.string().required(),
    Input_datatable: Joi.string().required(),
    Input_datatable_ui: Joi.string().required(),
    Input_filtering_condition: Joi.string().required(),
    Input_Option: Joi.array().items(Joi.string()).required(),
    Parent: Joi.string().required(),
    UI_Category: Joi.string().required(),
    Unique_Count: Joi.string().required(),

  })

);

 

export function validateConfigData(req: Request, res: Response, next: NextFunction) {

  const { error } = configDataSchema.validate(req.body);

  if (error) {

    sendErrorResponse(res, error.message, 'Invalid config data', 400);

  } else {

    next();

  }

}
