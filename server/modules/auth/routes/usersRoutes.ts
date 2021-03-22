import { Router } from "https://deno.land/x/oak/mod.ts";
import {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    desactiveUser,
    changePassword
} from '../controllers/usersControllers.ts';

export default  (router:Router) => {
    router.get('/users',getUsers);

    router.get('/users/:idUser',getUserById);

    router.post('/users',addUser);

    router.put('/users/:idUser',updateUser);

    router.delete('/users/:idUser',desactiveUser);
}