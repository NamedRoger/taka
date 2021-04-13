import * as classService from '../../services/classes/classServices.ts';
import {RouterContext,Request,Response} from '../../../../deps.ts'
import {notFound,badRequest,ok,noContent} from '../../../../helpers/http/mod.ts';

const addClass = async (ctx:RouterContext) => {
    const {request,response,params} = ctx;
    
}

const getClass = async (ctx:RouterContext) => {
    const {request,response,params} = ctx;
    const idClass = Number(params.idClass);
    try{
        if(!idClass) return notFound(ctx);
        const clase = await classService.getClassById(idClass);
        if(!clase) return notFound(ctx);

        return response.body = clase;
    }catch(e){
        const error:Error = e;
        return badRequest(ctx,error.message);
    }
}

const getClasses = async (ctx:RouterContext) => {
    const {request,response,params} = ctx;
    const idSchedule = Number(params.idSchedule);
    try{
        const clases = await classService.getClass(idSchedule);
        response.body = {
            clases
        };
    }catch(e){
        const error:Error = e;
        return badRequest(ctx,error.message);
    }
    
}

const updateClass = async (ctx:RouterContext) => {
    const {request,response,params} = ctx;
}

const desactiveClass = async (ctx:RouterContext) => {
    const {request,response,params} = ctx;
    try{
        const idClass = Number(params.idClass);
        if(!idClass) return  notFound(ctx);
        await classService.desactiveClass(idClass);
        return noContent(ctx);
    }catch(e){
        const error:Error = e;
        return badRequest(ctx,error.message);
    }
}

export {
    addClass,
    getClass,
    getClasses,
    updateClass,
    desactiveClass
}
 