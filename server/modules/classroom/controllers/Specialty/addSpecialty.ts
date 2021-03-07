import { Specialty } from '../../models/specialty.ts';
import { addSpecialty } from '../../services/specialties/specialtieService.ts';
import { generateCode } from '../../../../helpers/index.ts';


export default async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newSpecialty: Specialty = await body.value;
    newSpecialty.active = true;
    newSpecialty.code = generateCode("ESP",newSpecialty.name);
    try{
        const res = await addSpecialty(newSpecialty);
        response.status = 201;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.boy = {
            error:e.message
        }
    }

}
