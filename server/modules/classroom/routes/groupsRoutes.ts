import { Router } from '../../../deps.ts';
import { authetincation, authorization } from '../../../middlewares/mod.ts';
import {
    getGroup,
    getGroups,
    addGroup,
    desactiveGroup,
    updateGroup,
} from '../controllers/groups/groupControllers.ts';

import {
    addSchedule,
    desactiveSchedule,
    getSchedule,
    updateSchedule
} from '../controllers/groups/scheduleController.ts';

export default (router: Router) => {
    router.get('/groups', authetincation, async (c, n) => { await authorization(c, n, "admin") }, getGroups);

    router.get('/groups/:group', authetincation, async (c, n) => { await authorization(c, n, "admin") }, getGroup);

    router.post('/groups', authetincation, async (c, n) => { await authorization(c, n, "admin") }, addGroup);

    router.put('/groups/:idGroup', authetincation, async (c, n) => { await authorization(c, n, "admin") }, updateGroup);

    router.delete('/gruops/:idGroup', authetincation, async (c, n) => { await authorization(c, n, "admin") }, desactiveGroup);

    router.get('/grupos/:idGroup/period/:idPeriod/schedule',
        authetincation, async (c, n) => { await authorization(c, n, "admin") }, getSchedule);

    router.post('/grupos/:idGroup/period/:idPeriod/schedule',
        authetincation, async (c, n) => { await authorization(c, n, "admin") }, addSchedule);

    router.delete('/grupos/:idGroup/period/:idPeriod/schedule/idSchedule',
        authetincation, async (c, n) => { await authorization(c, n, "admin") }, desactiveSchedule);
}