import { Router } from "https://deno.land/x/oak/mod.ts";
import rolesRoutes from './rolesRoutes.ts';

const router = new Router();

rolesRoutes(router);

export default router;