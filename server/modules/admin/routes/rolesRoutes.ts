import {Router} from '../../../deps.ts';
import { authetincation, authorization } from '../../../middlewares/mod.ts';
import {
    getRole,
    getRoles,
    addRole,
    updateRole,
    desactiveRole
} from '../controllers/rolesController.ts';

export default  (router:Router) => {
    router.get('/roles',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,getRoles);

    router.get('/roles/:role',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,getRole);

    router.post('/roles',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,addRole);

    router.put('/roles/:idRole',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,updateRole);

    router.delete('/roles/:idRole',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,desactiveRole);
}