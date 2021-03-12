
import { Group } from '../../models/groups.ts';
import * as groupService from '../../services/groups/groupService.ts';
import { generateCode } from '../../../../helpers/index.ts';


const addGroup =  async ({ request,response }: {request:any, response: any }) => {
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


const desactiveGroup =  async ({params, response }:{ params:any,response: any }) => {
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

const getGroup = async ({params, response }:{ params:any,response: any }) => {
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

const getGroups = async ({ response }: { response: any }) => {
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

const updateGroup = async ({ request,params,response }: {request:any,params:any, response: any }) => {
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



export {
    getGroup,
    getGroups,
    addGroup,
    desactiveGroup,
    updateGroup
} 

