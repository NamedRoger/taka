import {Class } from '../../models/class.ts';
import { addClass } from '../../services/addclass/classService.ts';

export default async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const data = await body.value;
    data.active = true;
    const Class:Class = dataToClass(data);
    try{
        const res = await addClass(Class);
        Class.idClass = res.lastInsertId;
        response.status = 201;
        response.body = Class;
    }catch(e){
        response.body = {
            error:e.message
        }
    }
}

const dataToClass = (data:any):Class => ({
    active:data.active,
    group:{
        idGroup:Number(data.idGroup),
        name:"",
        code:""
    },
    period:{
        idPeriod:Number(data.idPeriod),
        name:"",
        finishDate:new Date(),
        initDate:new Date()
    }
});