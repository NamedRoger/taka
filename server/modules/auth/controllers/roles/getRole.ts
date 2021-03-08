import { Role } from '../../models/index.ts';
import { getRoleById } from '../../services/roles/rolesServices.ts';


export default async ({ request,response,params }: {request:any, response: any, params:any }) => {
    try{
        const res:Role = await getRoleById(Number(params.role));
        response.status = 200;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}