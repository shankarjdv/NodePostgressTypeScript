// src/app.ts
import express from 'express';
import userRoutes from './routes/userRoutes';
import tabAccessRoutes from './routes/tabAccessRoutes';
import roleRoutes from './routes/roleRoutes';
const app = express();

// Middlewares and global configurations

// Middleware to parse request body
app.use(express.json());

//

// Routes
app.use('/users', userRoutes);
app.use('/tabAccess', tabAccessRoutes);
app.use('/users', userRoutes);
app.use('/roles', roleRoutes);
// Other route middleware
 

export default app;