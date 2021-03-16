import { Router } from "https://deno.land/x/oak/mod.ts";
import {
    getPeriods,
    addPeriod,
    desactivePeriod,
    getPeriod,
    updatePeriod

} from '../controllers/periods/periodsController.ts';

export default  (router:Router) => {
    router.get('/periods',getPeriod);

    router.get('/periods/:idPeriod',getPeriod);

    router.post('/periods',addPeriod);

    router.put('/periods/:idPeriod',updatePeriod);

    router.delete('/periods/:idPeriod',desactivePeriod);
}