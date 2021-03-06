import {IPeriod } from '../../models/period.ts';
import { updatePeriod } from '../../services/periods/periodsService.ts';

export default async ({ request,params,response }: {request:any,params:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newDataPeriod:IPeriod = await body.value;
    newDataPeriod.idPeriod = params.idPeriod;
    const res = await updatePeriod(newDataPeriod);
    response.body = res;
}
