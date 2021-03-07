import { Router } from "https://deno.land/x/oak/mod.ts";
import {
    getSpecialty,
    getSpecialtys,
    updateSpecialty,
    addSpecialty,
    desactiveSpecialty
} from '../controllers/Specialty/specialtyControllers.ts';

export default  (router:Router) => {
    router.get('/specialities',getSpecialtys);

    router.get('/specialities/:speciality',getSpecialty);

    router.post('/specialities',addSpecialty);

    router.put('/specialities/:idSpeciality',updateSpecialty);

    router.delete('/specialities/:idSpeciality',desactiveSpecialty);
}