import { Router } from "https://deno.land/x/oak/mod.ts";
import {
    getRole,
    getRoles,
    addRole,
    updateRole,
    desactiveRole
} from '../controllers/rolesController.ts';

export default  (router:Router) => {
    router.get('/roles',getRoles);

    router.get('/roles/:role',getRole);

    router.post('/roles',addRole);

    router.put('/roles/:idRole',updateRole);

    router.delete('/roles/:idRole',desactiveRole);
}