import { Role } from '../../models/index.ts';
import { updateRole } from '../../services/roles/rolesServices.ts';
import { generateCode } from '../../../../helpers/index.ts';
import { roles } from '../../consts.ts';


export default async ({ request,response,params }: {request:any, response: any, params:any }) => {
    const body = await request.body({type:"json"});
    const newRole: Role = await body.value;
    newRole.idRole = Number(params.idRole);
    newRole.code = generateCode(roles.code,newRole.name).trim();
    try{
        const res = await updateRole(newRole);
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}