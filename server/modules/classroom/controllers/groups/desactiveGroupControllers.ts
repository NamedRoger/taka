import { desactivegroup } from '../../services/groups/groupService.ts';

export default async ({params, response }:{ params:any,response: any }) => {
    try{
        const res = await desactivegroup(params.idGroup);

        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}
