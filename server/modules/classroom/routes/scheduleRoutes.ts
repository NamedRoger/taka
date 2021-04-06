import {Router} from '../../../deps.ts';
import { authetincation, authorization } from '../../../middlewares/mod.ts';
import {
    addSchedule,
    getSchedule,
    updateSchedule,
    desactiveSchedule
} from '../controllers/scheduleController.ts';

export default  (router:Router) => {

    router.get('/schedules/:idSchedule',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,getSchedule);

    router.post('/schedules',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,addSchedule);

    router.put('/schedules/:idSchedule',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,updateSchedule);

    router.delete('/schedules/:idSchedule',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,desactiveSchedule);
}