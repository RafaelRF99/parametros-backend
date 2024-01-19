import bcrypt from 'bcryptjs'
import Admin from '../database/schemas/Admin';
import { Request, Response, NextFunction  } from 'express';

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
            const hashedPassword = await bcrypt.hash(password, 10)

            const user = await Admin.create({
                email,
                password: hashedPassword
            })

            return res.json(user);

        } catch (error) {
            return res.status(500).send({ error: "Algo errado aconteceu!", message: error });
        }
    }

}

export default new UserAdmin;