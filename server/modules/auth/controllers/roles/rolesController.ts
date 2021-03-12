import { Role } from '../../models/index.ts';
import * as rolesService from '../../services/roles/rolesServices.ts';
import {generateCode} from '../../../../helpers/index.ts';

const getRoles =  async ({ request,response,params }: {request:any, response: any, params:any }) => {
    try{
        const res = await rolesService.getRoles();
        response.status = 200;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}

const addRole = async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newRole: Role = await body.value;
    newRole.active = true;
    newRole.code = generateCode(newRole.code,newRole.name).trim();
    try{
        const res = await rolesService.addRole(newRole);
        response.status = 201;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}

const getRole =  async ({ request,response,params }: {request:any, response: any,params:any }) => {
    try{
        const res = await rolesService.desactiveRole(Number(params.idRole));
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}

const updateRole =  async ({ request,response,params }: {request:any, response: any, params:any }) => {
    try{
        const res:Role = await rolesService.getRoleById(Number(params.role));
        response.status = 200;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}

const desactiveRole =  async ({ request,response,params }: {request:any, response: any, params:any }) => {
    const body = await request.body({type:"json"});
    const newRole: Role = await body.value;
    newRole.idRole = Number(params.idRole);
    newRole.code = generateCode(newRole.code,newRole.name).trim();
    try{
        const res = await rolesService.updateRole(newRole);
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}

export {
    addRole,
    getRole,
    getRoles,
    updateRole,
    desactiveRole
}