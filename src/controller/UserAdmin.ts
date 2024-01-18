import Admin from '../database/schemas/Admin';
import { Request, Response, NextFunction  } from 'express';
import jwt from 'jsonwebtoken';

const SECRET = '123';

class UserAdmin {

    async create(req: Request, res: Response) {
        const { email, password } = req.body;

        const userExists = await Admin.findOne({email});

        if(userExists) {
            return res.status(400).json({
                error: "Oops",
                message: "Email já cadastrado!!!"
            })
        }

        try {
            const user = await Admin.create({
                email,
                password
            })

            return res.json(user);

        } catch (error) {
            return res.status(500).send({ error: "Algo errado aconteceu!", message: error });
        }
    }

}

export default new UserAdmin;