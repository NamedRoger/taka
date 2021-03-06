import {IPeriod } from '../../models/period.ts';
import { addPeriod } from '../../services/periods/periodsService.ts';

export default async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newPeriod:IPeriod = await body.value;
    newPeriod.active = true;
    const res = await addPeriod(newPeriod);
    response.body = res;
}
