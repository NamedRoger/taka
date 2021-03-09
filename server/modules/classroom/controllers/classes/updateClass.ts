import {Class } from '../../services/class/classService.ts';

export default async ({ request,response,params }: {request:any, response: any,params:any }) => {
    const body = await request.body({type:"json"});
    const data = await body.value;
    data.active = true;
    data.idClass = params.idClass;
    const Class:Class = dataToClass(data);
    try{
        const res = await updateClass(Class);
        response.status = 204;
    }catch(e){
        response.body = {
            error:e.message
        }
    }
}

const dataToClass = (data:any):Class => ({
    idClass:Number(data.idClass),
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