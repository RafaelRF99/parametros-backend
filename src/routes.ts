import ValidationJWT from "./controller/ValidationJWT";
import Parametro from "./controller/Parametrocontroller";
import UserAdmin from "./controller/UserAdmin";

import { Router } from "express";

const routes = Router();

routes.get("/parametro", ValidationJWT.verifyJWT, Parametro.getAll);
routes.post("/parametro", ValidationJWT.verifyJWT, Parametro.create);
routes.put("/parametro/:id", ValidationJWT.verifyJWT, Parametro.edit);
routes.delete("/parametro/:id", ValidationJWT.verifyJWT, Parametro.delete);

routes.post("/admin", ValidationJWT.valid)
routes.post("/admin/create", UserAdmin.create)



export default routes;