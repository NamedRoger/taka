import {Schedule } from '../../models/schedule.ts';
import { addSchedule } from '../../services/schedule/scheduleService.ts';

export default async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const data = await body.value;
    data.active = true;
    const schedule:Schedule = dataToSchedule(data);
    try{
        const res = await addSchedule(schedule);
        schedule.idSchedule = res.lastInsertId;
        response.status = 201;
        response.body = schedule;
    }catch(e){
        response.body = {
            error:e.message
        }
    }
}

const dataToSchedule = (data:any):Schedule => ({
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