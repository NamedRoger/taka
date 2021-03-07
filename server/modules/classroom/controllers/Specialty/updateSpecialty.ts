import { Specialty } from '../../models/specialty.ts';
import { updateSpecialty } from '../../services/specialty/specialtyService.ts';

export default async ({ request,params,response }: {request:any,params:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newDataSpecialty:IdSpecialty = await body.value;
    newDataSpecialty.idSpecialty = params.idSpecialty;
    const res = await updateSpecialty(newDataSpecialty);
    response.body = res;
}
