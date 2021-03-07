import { Grupo } from '../../models/group.ts';
import { updateGroup } from '../../services/group/groupService.ts';

export default async ({ request,params,response }: {request:any,params:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newDataGroup:Grupo = await body.value;
    newDataGroup.idPeriod = params.idGroup;
    const res = await updateGroup(newDataGroup);
    response.body = res;
}
