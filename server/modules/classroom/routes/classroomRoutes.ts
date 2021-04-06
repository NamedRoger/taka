import {Router} from '../../../deps.ts';

import periodsRouter from './periodsRoutes.ts';
import topicsRouter from './topicsRoutes.ts';
import specialitiesRoutes from './specialitiesRoutes.ts';
import gruposRoutes from './groupsRoutes.ts';
import schedulesRoutes from './scheduleRoutes.ts';
// import classesRoutes from './classesRoutes.ts';

var router = new Router();

periodsRouter(router);
topicsRouter(router);
specialitiesRoutes(router);
gruposRoutes(router);
schedulesRoutes(router);
// classesRoutes(router);


export default router;

