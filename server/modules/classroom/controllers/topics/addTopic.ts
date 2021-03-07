import {Topic } from '../../models/topic.ts';
import { addTopic } from '../../services/topics/topicsService.ts';
import { generateCode } from '../../../../helpers/index.ts';

export default async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newTopic:Topic = await body.value;
    newTopic.active = true;
    newTopic.code = generateCode("MAT",newTopic.name);
    try{
        const res = await addTopic(newTopic);
        response.status = 201
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
    
}
