import { Router } from "https://deno.land/x/oak/mod.ts";

import periodsRouter from './periodsRoutes.ts';
import topicsRouter from './topicsRoutes.ts';
import specialitiesRoutes from './specialitiesRoutes.ts';
import gruposRoutes from './groupsRoutes.ts';

var router = new Router();

periodsRouter(router);
topicsRouter(router);
specialitiesRoutes(router);
gruposRoutes(router);


export default router;

