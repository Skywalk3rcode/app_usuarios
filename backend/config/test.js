import { db } from './db.js';

const test = async () => {
  try {
    const [rows] = await db.query('SELECT 1');
    console.log('Conexión exitosa:', rows);
  } catch (error) {
    console.error('Error:', error);
  }
};

test();
