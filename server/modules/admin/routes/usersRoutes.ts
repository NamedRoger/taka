import {Router} from '../../../deps.ts';
import { authetincation, authorization } from '../../../middlewares/mod.ts';
import {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    desactiveUser,
    changePassword
} from '../controllers/usersControllers.ts';

export default  (router:Router) => {
    router.get('/users',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,getUsers);

    router.get('/users/:idUser',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,getUserById);

    router.post('/users',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,addUser);

    router.put('/users/:idUser',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,updateUser);

    router.delete('/users/:idUser',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,desactiveUser);
}