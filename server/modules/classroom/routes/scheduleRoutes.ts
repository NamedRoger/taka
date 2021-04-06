import {Router} from '../../../deps.ts';
import {
    addSchedule,
    getSchedule,
    updateSchedule,
    desactiveSchedule
} from '../controllers/scheduleController.ts';

export default  (router:Router) => {

    router.get('/schedules/:idSchedule',getSchedule);

    router.post('/schedules',addSchedule);

    router.put('/schedules/:idSchedule',updateSchedule);

    router.delete('/schedules/:idSchedule',desactiveSchedule);
}