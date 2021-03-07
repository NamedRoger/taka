import { getSpecialtyById } from '../../services/specialties/specialtieService.ts';
import { Specialty} from '../../models/specialty.ts';


export default async ({params, response }:{ params:any,response: any }) => {
    try{
        const res:Specialty = await getSpecialtyById(Number(params.idSpecialty));

        response.status = 200;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}
