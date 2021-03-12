import { Schedule } from '../../models/Schedule.ts';
import * as scheduleService from '../../services/groups/schedule/scheduleService.ts';

const addSchedule = async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const data = await body.value;
    data.active = true;
    const schedule:Schedule = dataToSchedule(data);
    try{
        const res = await scheduleService.addSchedule(schedule);
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


const desactiveSchedule = async ({ response,params }: { response: any,params:any }) => {

    try{
        const scheduele = await scheduleService.desactiveSchedule(Number(params.idSchedule));
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}

const getSchedule = async ({ response,params }: { response: any,params:any }) => {

    try{
        const scheduele = await scheduleService.getSchedule(Number(params.idSchedule));
        response.status = 200;
        response.body = scheduele;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}


const getSchedules = async ({ response }: { response: any }) => {
    try{
        const schedules = await scheduleService.getSchedules();

        response.status = 200;
        response.body = schedules;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}

const updateSchedule = async ({ request,response,params }: {request:any, response: any,params:any }) => {
    const body = await request.body({type:"json"});
    const data = await body.value;
    data.active = true;
    data.idSchedule = params.idSchedule;
    const schedule:Schedule = dataToSchedule(data);
    try{
        const res = await scheduleService.updateSchedule(schedule);
        response.status = 204;
    }catch(e){
        response.body = {
            error:e.message
        }
    }
}


export {
    addSchedule,
    getSchedule,
    getSchedules,
    updateSchedule,
    desactiveSchedule
}
