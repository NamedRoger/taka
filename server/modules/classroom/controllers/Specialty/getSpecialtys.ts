import { getSpecialty } from '../../services/specialty/specialtyService.ts';

export default async ({ response }: { response: any }) => {
    try{
        const specialty = await getSpecialty();

        response.status = 200;
        response.body = specialty;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}

