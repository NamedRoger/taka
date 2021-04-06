import {Router} from '../../../deps.ts';
import { authetincation, authorization } from '../../../middlewares/mod.ts';
import {
    getPeriods,
    addPeriod,
    desactivePeriod,
    getPeriod,
    updatePeriod

} from '../controllers/periodsController.ts';

export default (router: Router) => {
    
    router.get('/periods',authetincation,async (ctx,next) => {
        await authorization(ctx,next,"admin");
    }, getPeriods);

    router.get('/periods/:idPeriod',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} , getPeriod);

    router.post('/periods',authetincation,async (c,n) =>{ await authorization(c,n,"admin")}, addPeriod);

    router.put('/periods/:idPeriod',authetincation,async (c,n) =>{ await authorization(c,n,"admin")}, updatePeriod);

    router.delete('/periods/:idPeriod',authetincation,async (c,n) =>{ await authorization(c,n,"admin")}, desactivePeriod);
}