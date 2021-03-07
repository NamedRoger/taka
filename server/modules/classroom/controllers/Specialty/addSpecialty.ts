import { Specialty } from '../../models/specialty.ts';
import { addSpecialty } from '../../services/specialty/specialtyService.ts';

export default async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newSpecialty: IdSpecialty = await body.value;
    newSpecialty.active = true;
    const res = await addSpecialty(newSpecialty);
    response.body = res;
}
