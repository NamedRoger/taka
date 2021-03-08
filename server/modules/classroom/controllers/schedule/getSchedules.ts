import { getSchedules } from '../../services/schedule/scheduleService.ts';

export default async ({ response }: { response: any }) => {
    try{
        const schedules = await getSchedules();

        response.status = 200;
        response.body = schedules;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}