import {Router} from '../../../deps.ts';
import { authetincation, authorization } from '../../../middlewares/mod.ts';
import {
    getSpecialtie,
    getSpecialties,
    updateSpecialty,
    addSpecialty,
    desactiveSpecialty
} from '../controllers/specialtyControllers.ts';

export default  (router:Router) => {
    router.get('/specialities',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,getSpecialties);

    router.get('/specialities/:speciality',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,getSpecialtie);

    router.post('/specialities',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,addSpecialty);

    router.put('/specialities/:idSpeciality',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,updateSpecialty);

    router.delete('/specialities/:idSpeciality',authetincation,async (c,n) =>{ await authorization(c,n,"admin")} ,desactiveSpecialty);
}