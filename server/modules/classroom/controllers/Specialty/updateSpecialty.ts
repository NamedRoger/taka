import { Specialty } from '../../models/specialty.ts';
import { updateSpecialty } from '../../services/specialties/specialtieService.ts';
import { generateCode } from '../../../../helpers/index.ts';



export default async ({ request,params,response }: {request:any,params:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newDataSpecialty:Specialty = await body.value;
    newDataSpecialty.idSpecialty =  Number(params.idSpeciality);
    newDataSpecialty.code = generateCode("ESP",newDataSpecialty.name);
    try{
        const res = await updateSpecialty(newDataSpecialty);
        response.status = 204;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
    
}
