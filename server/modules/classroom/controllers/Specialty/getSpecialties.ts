import { getSpecialties } from '../../services/specialties/specialtieService.ts';


export default async ({ response }: { response: any }) => {
    try{
        const specialties = await getSpecialties();

        response.status = 200;
        response.body = specialties;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}

