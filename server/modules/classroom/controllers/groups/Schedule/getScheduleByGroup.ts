import { getSchedules} from '../../../services/groups/schedule/scheduleService.ts'
 
export default async ({ params, response }: { params:any, response: any }) => {
    try{
        const res = await getSchedules(Number(params.idGroup),Number(params.idPeriod));

        response.status = 200;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}

