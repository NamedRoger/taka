import { Router } from "https://deno.land/x/oak/mod.ts";
import {
    addSchedule,
    getSchedule,
    getSchedules,
    updateSchedule,
    desactiveSchedule
} from '../controllers/schedule/scheduleController.ts';

export default  (router:Router) => {
    router.get('/schedules',getSchedules);

    router.get('/schedules/:idSchedule',getSchedule);

    router.post('/schedules',addSchedule);

    router.put('/schedules/:idSchedule',updateSchedule);

    router.delete('/schedules/:idSchedule',desactiveSchedule);
}