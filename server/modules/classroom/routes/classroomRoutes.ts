import { Router } from "https://deno.land/x/oak/mod.ts";

import periodsRouter from './periodsRoutes.ts';
import topicsRouter from './topicsRoutes.ts';

var router = new Router();

periodsRouter(router);
topicsRouter(router);



export default router;

