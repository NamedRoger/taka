import { Router } from "https://deno.land/x/oak/mod.ts";
import {
    addSchedule,
    getSchedule,
    updateSchedule,
    desactiveSchedule
} from '../controllers/schedule/scheduleController.ts';

export default  (router:Router) => {

    router.get('/schedules/:idSchedule',getSchedule);

    router.post('/schedules',addSchedule);

    router.put('/schedules/:idSchedule',updateSchedule);

    router.delete('/schedules/:idSchedule',desactiveSchedule);
}