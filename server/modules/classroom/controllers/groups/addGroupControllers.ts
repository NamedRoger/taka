import { Grupos } from '../../models/group.ts';
import { addGroup } from '../../services/group/groupService.ts';

export default async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newGroup: Grupos= await body.value;
    newGroup.active = true;
    const res = await addGroup(newGroup);
    response.body = res;
}
