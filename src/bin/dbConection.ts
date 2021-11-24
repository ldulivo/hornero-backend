import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const host = process.env.DB_HOST;
const dialect:any = `${process.env.DB_DIALECT}`;

const db = new Sequelize( `${dbName}`, `${dbUser}`, `${dbPassword}`, {
    host,
    dialect
    //logging: false
} )

export default db;