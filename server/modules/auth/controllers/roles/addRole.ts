import { Role } from '../../models/index.ts';
import { addRole } from '../../services/roles/rolesServices.ts';
import { generateCode } from '../../../../helpers/index.ts';
import { roles } from '../../consts.ts';


export default async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newRole: Role = await body.value;
    newRole.active = true;
    newRole.code = generateCode(roles.code,newRole.name).trim();
    try{
        const res = await addRole(newRole);
        response.status = 201;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}