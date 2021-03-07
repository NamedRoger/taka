import { getTopicByCode,getTopicById } from '../../services/topics/topicsService.ts';
import {Topic } from '../../models/topic.ts';


export const getTopic =  async ({params, response }:{ params:any,response: any }) => {
    try{
        let idOrCode:any;
        let topic:Topic;
        idOrCode = (/^\d+$/.test(params.topic))?Number(params.topic):params.topic;
        if(Number.isInteger(idOrCode)){
            topic = await getTopicById(idOrCode);
        }else{
            topic = await getTopicByCode(idOrCode);
        }
        response.status = 200;
        response.body = topic;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}

