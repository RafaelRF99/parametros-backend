import ValidationJWT from "./controller/ValidationJWT";
import Parametro from "./controller/Parametrocontroller";
import UserAdmin from "./controller/UserAdmin";

import { Router } from "express";

const routes = Router();

routes.get("/parametro", Parametro.getAll);
routes.post("/parametro", Parametro.create);
routes.put("/parametro/:id", Parametro.edit);
routes.delete("/parametro/:id", Parametro.delete);

routes.post("/admin", ValidationJWT.valid)
routes.post("/admin/create", UserAdmin.create)



export default routes;