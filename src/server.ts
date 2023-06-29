import sequelize from './models/index';
import { seedDatabase } from './seed/index';
// server.ts
import app from './app'
const port = 8079;
// app.ts
try {
    await sequelize.sync({force : false, logging: true});
    console.log('Sequelize models synchronized with the database.');
    await seedDatabase();
    console.log('Sequelize models seeds with the database.');

    // Start your application here
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Error synchronizing Sequelize models:', error);
  }
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });






