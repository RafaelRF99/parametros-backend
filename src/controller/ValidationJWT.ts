import { Request, Response, NextFunction  } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import Admin from '../database/schemas/Admin';

const SECRET = '123';

class ValidationJWT {

    verifyJWT(req: Request, res: Response, next: NextFunction) {

        const token = req.headers['x-access-token'] as string;
        if (!token) return res.status(401).send({ auth: false, message: 'Token não fornecido.' });


        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
              return res.status(500).send({ auth: false, message: 'Falha ao autenticar o token.' });
            }
      
            console.log(decoded);
            next();
          });

    }

    async valid(req: Request, res: Response) {
        try {
          const { email, password } = req.body;
          const user = await Admin.findOne({ email });
    
          if (!user || !bcrypt.compareSync(password, user.password as string)) {
            return res.status(401).send({ auth: false, message: 'E-mail ou senha inválidos.' });
          }
    
          const token = jwt.sign({ userId: user._id }, SECRET, { expiresIn: '1h' });
    
          return res.json({ auth: true, token });
        } catch (error) {
          return res.status(500).send({ auth: false, message: 'Erro interno do servidor.' });
        }
      }

}

export default new ValidationJWT;