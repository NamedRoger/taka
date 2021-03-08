import {Schedule } from '../../models/schedule.ts';
import { updateSchedule } from '../../services/schedule/scheduleService.ts';

export default async ({ request,response,params }: {request:any, response: any,params:any }) => {
    const body = await request.body({type:"json"});
    const data = await body.value;
    data.active = true;
    data.idSchedule = params.idSchedule;
    const schedule:Schedule = dataToSchedule(data);
    try{
        const res = await updateSchedule(schedule);
        response.status = 204;
    }catch(e){
        response.body = {
            error:e.message
        }
    }
}

const dataToSchedule = (data:any):Schedule => ({
    idSchedule:Number(data.idSchedule),
    active:data.active,
    group:{
        idGroup:Number(data.idGroup),
        name:"",
        code:""
    },
    period:{
        idPeriod:Number(data.idPeriod),
        name:"",
        finishDate:new Date(),
        initDate:new Date()
    }
});