import { getPeriodById } from '../../services/periods/periodsService.ts';
import {IPeriod } from '../../models/period.ts';


export default async ({params, response }:{ params:any,response: any }) => {
    try{
        const res:IPeriod = await getPeriodById(Number(params.idPeriod));

        response.status = 200;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}