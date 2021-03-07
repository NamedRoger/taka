import { Group } from '../../models/groups.ts';
import { addGroup } from '../../services/groups/groupService.ts';
import { generateCode } from '../../../../helpers/index.ts';


export default async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newGroup: Group = await body.value;
    newGroup.active = true;
    newGroup.code = generateCode("GPO",newGroup.name).trim();
    try{
        const res = await addGroup(newGroup);
        response.status = 201;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
    
}
