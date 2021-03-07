import { Specialty } from '../../models/specialty.ts';
import { updateSpecialty } from '../../services/specialties/specialtieService.ts';


export default async ({ request,params,response }: {request:any,params:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newDataSpecialty:Specialty = await body.value;
    newDataSpecialty.idSpecialty =  Number(params.idSpecialty);
    const res = await updateSpecialty(newDataSpecialty);
    response.body = res;
}
