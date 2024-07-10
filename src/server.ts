import app from './app';
import {config} from 'dotenv';
import db from './db';

config();

const PORT =  process.env.PORT  

db.raw('SELECT 1')
  .then(() => {
    console.log('Database connected successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to the database', err);
    process.exit(1);
  });
