import { getSchedule } from '../../services/schedule/scheduleService.ts';

export default async ({ response,params }: { response: any,params:any }) => {

    try{
        const scheduele = await getSchedule(Number(params.idSchedule));
        response.status = 200;
        response.body = scheduele;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}