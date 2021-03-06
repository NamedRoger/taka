import { Router } from "https://deno.land/x/oak/mod.ts";

import periodsRouter from './periodsRoutes.ts';

var router = new Router();

periodsRouter(router);

export default router;

