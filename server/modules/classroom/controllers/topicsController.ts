import { Topic } from '../models/topic.ts';
import * as topicsService from '../services/topics/topicsService.ts';
import { generateCode } from '../../../helpers/index.ts';

const addTopic = async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newTopic:Topic = await body.value;
    newTopic.active = true;
    newTopic.code = generateCode("MAT",newTopic.name);
    try{
        const res = await topicsService.addTopic(newTopic);
        response.status = 201
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}

const desactiveTopic = async ({params, response }:{ params:any,response: any }) => {
    try{
        const res = await topicsService.desactiveTopic(params.idTopic);
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}

const getTopic =  async ({request,params, response }:{request:any,params:any,response: any }) => {
    try{
        let idOrCode:any;
        let topic:Topic;
        idOrCode = (/^\d+$/.test(params.topic))?Number(params.topic):params.topic;
        if(Number.isInteger(idOrCode)){
            topic = await topicsService.getTopicById(idOrCode);
        }else{
            topic = await topicsService.getTopicByCode(idOrCode);
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


const getTopics = async ({ response }: { response: any }) => {
    try{
        const topics = await topicsService.getTopics();

        response.status = 200;
        response.body = topics;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}

const updateTopic = async ({ request,response,params }: {request:any, response: any,params:any }) => {
    const body = await request.body({type:"json"});
    const newDataTopic:Topic = await body.value;
    newDataTopic.idTopic = params.idTopic;
    newDataTopic.active = true;
    newDataTopic.code = generateCode("MAT",newDataTopic.name);
    try{
        const res = await topicsService.updateTopic(newDataTopic);
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
    
}


export {
    getTopics,
    addTopic,
    updateTopic,
    getTopic,
    desactiveTopic
}
