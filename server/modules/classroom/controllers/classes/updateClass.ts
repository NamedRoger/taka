import {updateClass } from '../../services/classes/classServices.ts';
import {Class } from '../../models/class.ts';

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
    idSchecule:Number(data.idSchedule),
    idTeacher:Number(data.idTeacher),
    idTopic:Number(data.idTopic),
    name:data.name,
    active:true,
    idClass:Number(data.idClass)
});