import { Schedule } from '../../models/schedule.ts';
import * as scheduleService from '../../services/groups/schedule/scheduleService.ts';

const addSchedule = async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const data = await body.value;
    data.active = true;
    const schedule:Schedule = dataToSchedule(data);
    try{
        console.log(schedule.idGroup)
        const foundSchedule = await scheduleService.getSchedule(schedule.idGroup,schedule.idPeriod);
        if(foundSchedule) throw new Error("ya exite un horario para este grupo en este periodo");
        console.log(foundSchedule);
        const res = await scheduleService.addSchedule(schedule);
        schedule.idSchedule = res.lastInsertId;

        response.status = 201;
        response.body = schedule;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}

const dataToSchedule = (data:any):Schedule => ({
    active:data.active,
    idGroup: Number.parseInt(data.idGroup),
    idPeriod: Number.parseInt(data.idPeriod),
    idSchedule: Number.parseInt(data.idSchedule),
    name: data.name
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
        const scheduele = await scheduleService.getSchedule(Number.parseInt(params.idGroup),Number.parseInt(params.idPeriod));
        response.status = 200;
        response.body = scheduele;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}


// const getSchedules = async ({ response,params }: { response: any, params:any }) => {
//     const {idGroup,idPeriod} = params
//     try{
//         const schedules = await scheduleService.getSchedules(idGroup,idPeriod);

//         response.status = 200;
//         response.body = schedules;
//     }catch(e){
//         response.status = 400;
//         response.body = {
//             error:e.message
//         };
//     }
// }

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
    updateSchedule,
    desactiveSchedule
}
