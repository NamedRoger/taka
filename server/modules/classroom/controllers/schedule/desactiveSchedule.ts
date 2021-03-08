import { desactiveSchedule } from '../../services/schedule/scheduleService.ts';

export default async ({ response,params }: { response: any,params:any }) => {

    try{
        const scheduele = await desactiveSchedule(Number(params.idSchedule));
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}