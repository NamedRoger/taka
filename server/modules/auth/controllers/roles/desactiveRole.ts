import { desactiveRole } from '../../services/roles/rolesServices.ts';


export default async ({ request,response,params }: {request:any, response: any,params:any }) => {
    try{
        const res = await desactiveRole(Number(params.idRole));
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}