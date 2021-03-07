import { getSpecialtyById } from '../../services/specialty/specialtyService.ts';
import {idSpecialty } from '../../models/specialtyService.ts';


export default async ({params, response }:{ params:any,response: any }) => {
    try{
        const res:idSpecialty = await getSpecialtyById(Number(params.idSpecialty));

        response.status = 200;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}
