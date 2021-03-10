import { getGroups } from '../../services/groups/groupService.ts';

export default async ({ response }: { response: any }) => {
    try{
        const periods = await getGroups();

        response.status = 200;
        response.body = periods;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}