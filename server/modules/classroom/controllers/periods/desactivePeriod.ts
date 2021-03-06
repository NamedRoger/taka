import { desactivePeriod } from '../../services/periods/periodsService.ts';

export default async ({params, response }:{ params:any,response: any }) => {
    try{
        const res = await desactivePeriod(params.idPeriod);

        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}