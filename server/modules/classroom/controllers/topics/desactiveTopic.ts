import { desactiveTopic } from '../../services/topics/topicsService.ts';


export default async ({params, response }:{ params:any,response: any }) => {
    try{
        const res = await desactiveTopic(params.idTopic);
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}