
import { Group } from '../../models/group.ts';
import { Schedule } from '../../models/schedule.ts';
import * as groupService from '../../services/groups/groupService.ts';
import * as scheduleService from '../../services/groups/schedule/scheduleService.ts';
import { generateCode } from '../../../../helpers/index.ts';
import { badRequest,notFound } from '../../../../helpers/http/mod.ts';
import {Request,RouterContext,Response,RouteParams} from '../../../../deps.ts';


const addGroup =  async ({ request,response }: {request:Request, response: Response }) => {
    const body = await request.body({type:"json"});
    const newGroup: Group = await body.value;
    newGroup.active = true;
    newGroup.code = generateCode("GPO",newGroup.name).trim();
    try{
        const res = await groupService.addGroup(newGroup);
        response.status = 201;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
    
}

const desactiveGroup =  async ({params, response }:{ params:RouteParams,response: Response }) => {
    try{
        const res = await  groupService.desactivegroup(Number(params.idGroup));
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}

const getGroup = async ({params, response }:{ params:RouteParams,response: Response }) => {
    try{
        const res:Group = await groupService.getGrupoById(Number(params.group));

        response.status = 200;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}

const getGroups = async ({ response }: { response: Response }) => {
    try{
        const periods = await groupService.getGroups();

        response.status = 200;
        response.body = periods;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}

const updateGroup = async ({ request,params,response }: {request:Request,params:RouteParams, response: Response }) => {
    const body = await request.body({type:"json"});
    const newDataGroup:Group = await body.value;
    newDataGroup.idGroup = params.idGroup;
    newDataGroup.code = generateCode("GPO",newDataGroup.name);
    try{
        const res = await groupService.updategroup(newDataGroup);
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
    
}

const getScheduleByGroup = async (ctx:RouterContext) => {
    const {request,response,params} = ctx;
    const {idGroup,idPeriod} = params;
    try {
        const scheduleFind = await scheduleService.getSchedule(Number(idGroup),Number(idPeriod));
        if(scheduleFind === null && scheduleFind === undefined) return notFound(ctx,"No existe ningún horario, por favor agregue uno");

        response.body = scheduleFind;
    }catch(e){
        return badRequest(ctx,e.message);
    }
}

const addSchedule = async (ctx:RouterContext) => {
    const {request,response} = ctx;
    const body = request.body({"type":"json"});
    const newSchedule:Schedule = await body.value;
    try{
        const scheduleFind = await scheduleService.getSchedule(newSchedule.idGroup,newSchedule.idPeriod);
        if(scheduleFind !== null && scheduleFind !== undefined) return badRequest(ctx,"Ya existe un horario en el periodo para este grupo");

        newSchedule.active = true;
        const res = await scheduleService.addSchedule(newSchedule);
        newSchedule.idSchedule = res.affectedRows;

        response.body = {
            success:true,
            data:newSchedule
        }
    }catch(e){
        return badRequest(ctx,e.message);
    }
}

const desactiveSchedule = async () => {

}




export {
    getGroup,
    getGroups,
    addGroup,
    desactiveGroup,
    updateGroup,
    addSchedule,
    getScheduleByGroup
} 

