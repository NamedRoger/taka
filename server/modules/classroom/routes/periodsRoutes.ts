import { Router } from "https://deno.land/x/oak/mod.ts";
import { authetincation, authorization } from '../../../middlewares/index.ts';
import {
    getPeriods,
    addPeriod,
    desactivePeriod,
    getPeriod,
    updatePeriod

} from '../controllers/periods/periodsController.ts';

export default (router: Router) => {
    router.get('/periods',authetincation,async (ctx,next) => {
        if(!(await authorization(ctx.request,"admin"))) return;
        
        await next();
    }, getPeriods);

    router.get('/periods/:idPeriod', getPeriod);

    router.post('/periods', addPeriod);

    router.put('/periods/:idPeriod', updatePeriod);

    router.delete('/periods/:idPeriod', desactivePeriod);
}