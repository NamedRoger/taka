import { getGroupById } from '../../services/getgroup/getGroupById.ts';
import {Grupo } from '../../models/Group.ts';


export default async ({params, response }:{ params:any,response: any }) => {
    try{
        const res:Grupo = await getGroupById(Number(params.idGroup));

        response.status = 200;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}
