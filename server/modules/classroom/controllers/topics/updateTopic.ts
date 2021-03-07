import {Topic } from '../../models/topic.ts';
import {  updateTopic } from '../../services/topics/topicsService.ts';
import { generateCode } from '../../../../helpers/index.ts';

export default async ({ request,response,params }: {request:any, response: any,params:any }) => {
    const body = await request.body({type:"json"});
    const newDataTopic:Topic = await body.value;
    newDataTopic.idTopic = params.idTopic;
    newDataTopic.active = true;
    newDataTopic.code = generateCode("MAT",newDataTopic.name);
    try{
        const res = await updateTopic(newDataTopic);
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
    
}
