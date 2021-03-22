import { Router } from "https://deno.land/x/oak/mod.ts";

import rolesRoutes from './rolesRoutes.ts';
import usersRoutes from './usersRoutes.ts';


const router = new Router();

rolesRoutes(router);
usersRoutes(router);

export default router;