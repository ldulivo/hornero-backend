import { Request, Response } from "express";
import User from "../models/userModels";

export const getUsers = async ( req: Request, res: Response ) => {
    const { body } = req;
    const state = ( !body.state )? true : false;

    const users = await User.findAll({
        where: {
            state
        }
    });

    res.json({
        users
    });
}

export const getUser = async ( req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if ( user ) {
        res.json({
            user
        });
    } else {
        res.json({
            msg: `There is no user with the id ${ id }`
        });
    }
}

export const postUser = async ( req: Request, res: Response ) => {
    const { body } = req;

    try {
        const existEmail = await User.findOne({
            where: {
                email: body.email
            }
        });

        if ( existEmail ) {
            return res.status(400).json({
                msg: `There is already a user with the email ${ body.email }`
            });
        }

        const user = new ( User as any )(body);
        await user.save();

        res.json({
            user
        });

    } catch (error:any) {
        console.log(error);
        res.status(500).json({
            msg: 'Contact the administrator.'
        });
    }
}

export const putUser = async ( req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const user = await User.findByPk( id );

        if ( !user ) {
            return res.status(400).json({
                msg: `The id ${ id } does not exist.`
            });
        }

        await user.update( body );

        res.json({
            user
        })

    } catch (error:any) {
        console.log(error);
        res.status(500).json({
            msg: 'Contact the administrator.'
        });
    }
}

export const deleteUser = async ( req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk( id );
        
        if ( !user ) {
            return res.status(400).json({
                msg: `The id ${ id } does not exist.`
            });
        }

        await user.update(
            {
                state: false
            }
        );

        res.json({
            user
        });
        
    } catch (error:any) {
        console.log(error);
        res.status(500).json({
            msg: 'Contact the administrator.'
        });
    }
}