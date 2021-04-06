import { Router } from "https://deno.land/x/oak/mod.ts";
import loginRoutes from './loginRoutes.ts' 

const router = new Router();

loginRoutes(router);

export default router;