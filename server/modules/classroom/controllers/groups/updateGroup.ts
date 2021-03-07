import { Group } from '../../models/groups.ts';
import { updategroup } from '../../services/groups/groupService.ts';
import { generateCode } from '../../../../helpers/index.ts';

export default async ({ request,params,response }: {request:any,params:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newDataGroup:Group = await body.value;
    newDataGroup.idGroup = params.idGroup;
    newDataGroup.code = generateCode("GPO",newDataGroup.name);
    try{
        const res = await updategroup(newDataGroup);
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
    
}
