import { getGrupoById } from '../../services/groups/groupService.ts';
import {Group } from '../../models/groups.ts';


export default async ({params, response }:{ params:any,response: any }) => {
    try{
        const res:Group = await getGrupoById(Number(params.group));

        response.status = 200;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}
