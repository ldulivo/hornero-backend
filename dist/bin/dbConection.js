"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config();
const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const host = process.env.DB_HOST;
const dialect = `${process.env.DB_DIALECT}`;
const db = new sequelize_1.Sequelize(`${dbName}`, `${dbUser}`, `${dbPassword}`, {
    host,
    dialect
    //logging: false
});
exports.default = db;
//# sourceMappingURL=dbConection.js.map