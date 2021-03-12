import { Router } from "https://deno.land/x/oak/mod.ts";
import {
    getSpecialtie,
    getSpecialties,
    updateSpecialty,
    addSpecialty,
    desactiveSpecialty
} from '../controllers/Specialty/specialtyControllers.ts';

export default  (router:Router) => {
    router.get('/specialities',getSpecialties);

    router.get('/specialities/:speciality',getSpecialtie);

    router.post('/specialities',addSpecialty);

    router.put('/specialities/:idSpeciality',updateSpecialty);

    router.delete('/specialities/:idSpeciality',desactiveSpecialty);
}