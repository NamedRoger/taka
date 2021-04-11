
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

const updateGroup = async (ctx:RouterContext) => {
    const {request,response,params} = ctx;
    const body = await request.body({type:"json"});
    const newDataGroup:Group = await body.value;
    
    newDataGroup.idGroup = parseInt(params.idGroup || '0');
    newDataGroup.code = generateCode("GPO",newDataGroup.name);
    try{
        const foundGroup = await groupService.getGrupoById(newDataGroup.idGroup);
        if(!foundGroup) return notFound(ctx);

        const resutl = await groupService.updategroup(newDataGroup);
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
    
}



export {
    getGroup,
    getGroups,
    addGroup,
    desactiveGroup,
    updateGroup
} 

