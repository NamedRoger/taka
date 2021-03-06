import { getPeriods } from '../../services/periods/periodsService.ts';

export default async ({ response }: { response: any }) => {
    try{
        const periods = await getPeriods();

        response.status = 200;
        response.body = periods;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}