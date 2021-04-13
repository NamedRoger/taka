import { Router,RouterContext } from '../../../deps.ts';
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

import {
    addClass,
    desactiveClass,
    getClass,
    getClasses,
    updateClass
} from '../controllers/groups/classesController.ts';

export default (router: Router) => {
    router.get('/groups', authetincation, async (c, n) => { await authorization(c, n, "admin") }, getGroups);

    router.get('/groups/:group', authetincation, async (c, n) => { await authorization(c, n, "admin") }, getGroup);

    router.post('/groups', authetincation, async (c, n) => { await authorization(c, n, "admin") }, addGroup);

    router.put('/groups/:idGroup', authetincation, async (c, n) => { await authorization(c, n, "admin") }, updateGroup);

    router.delete('/groups/:idGroup', authetincation, async (c, n) => { await authorization(c, n, "admin") }, desactiveGroup);

    router.get('/groups/:idGroup/period/:idPeriod/schedule',
        authetincation, async (c, n) => { await authorization(c, n, "admin") }, getSchedule);

    router.post('/groups/:idGroup/period/:idPeriod/schedule',
        authetincation, async (c, n) => { await authorization(c, n, "admin") }, addSchedule);

    router.delete('/groups/:idGroup/period/:idPeriod/schedule/:idSchedule',
        authetincation, async (c, n) => { await authorization(c, n, "admin") }, desactiveSchedule);


        
    router.get('/groups/:idGroup/period/:idPeriod/schedule/:idSchedule/classes',
        authetincation, async (c, n) => { await authorization(c, n, "admin") },
        getClasses);

    router.get('/groups/:idGroup/period/:idPeriod/schedule/:idSchedule/classes/:idClass',
        authetincation, async (c, n) => { await authorization(c, n, "admin") },
        getClass);

    router.post('/groups/:idGroup/period/:idPeriod/schedule/:idSchedule/classes',
        authetincation, async (c, n) => { await authorization(c, n, "admin") },
        addClass);

    router.put('/groups/:idGroup/period/:idPeriod/schedule/:idSchedule/classes/:idClass',
        authetincation, async (c, n) => { await authorization(c, n, "admin") },
        updateClass);

    router.delete('/groups/:idGroup/period/:idPeriod/schedule/:idSchedule/classes/:idClass',
        authetincation, async (c, n) => { await authorization(c, n, "admin") },
        desactiveClass);
}