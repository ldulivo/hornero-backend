import express, { Application } from 'express';
import cors from 'cors';

import db from './dbConection';

import userRouter from '../routes/userRouter';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    }

    constructor() {
        this.app = express();

        this.port = process.env.PORT || '8000';

        // Initials methods
        this.dbConnection();
        this.middlewares();

        // Define routes
        this.routers();
    }

    async dbConnection() {
        
        try {
            await db.authenticate();
            console.log('Connection has been established successfully.')
        } catch (error: any) {
            throw new Error( `Unable to connect to the database: ${error} ` )
        }
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Body reading
        this.app.use( express.json() );

        // Public folder
        this.app.use( express.static('public'));

    }

    routers() {
        this.app.use( this.apiPaths.users, userRouter );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server running on port: ', this.port);
            
        })
    }
}

export default Server;