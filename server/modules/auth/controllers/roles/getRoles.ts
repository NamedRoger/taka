import { Role } from '../../models/index.ts';
import { getRoles } from '../../services/roles/rolesServices.ts';


export default async ({ request,response,params }: {request:any, response: any, params:any }) => {
    try{
        const res = await getRoles();
        response.status = 200;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}