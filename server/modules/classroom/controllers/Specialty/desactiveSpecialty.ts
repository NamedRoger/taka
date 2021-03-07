import { desactiveSpecialty } from '../../services/specialties/specialtieService.ts';

export default async ({params, response }:{ params:any,response: any }) => {
    try{
        const res = await desactiveSpecialty(Number(params.idSpecialty));
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}
