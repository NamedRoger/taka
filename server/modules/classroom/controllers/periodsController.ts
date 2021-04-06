import { IPeriod } from '../models/period.ts';
import * as periodsService from '../services/periods/periodsService.ts';
import {Request,Response,RouterContext,RouteParams} from '../../../deps.ts';

const getPeriods = async ({request,response}:{request:Request,response:Response}) => {
    const periods = await periodsService.getPeriods();
    response.body = periods;
}

const getPeriod = async ({request,response,params}:{request:Request,response:Response,params:RouteParams}) => {
    const id = Number(params.idPeriod);
    try{
        const period = await periodsService.getPeriodById(id);
        response.body = period;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}

const addPeriod = async ({request,response}:{request:Request,response:Response}) => {
    const body = await request.body({type:"json"});

    const newPeriod:IPeriod = await body.value;
    try{
        const res = await periodsService.addPeriod(newPeriod);
        newPeriod.idPeriod = res.lastInsertId;
        response.status = 201;
        response.body = newPeriod;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}

const updatePeriod = async ({request,response,params}:{request:Request,response:Response,params:RouteParams}) => {
    const body = await request.body({type:"json"});
    const newPeriod:IPeriod = await body.value;
    
    const id = Number(params.idPeriod);
    try{
        newPeriod.idPeriod = id;
        await periodsService.updatePeriod(newPeriod);
        response.status = 204
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}

const desactivePeriod = async (ctx:RouterContext) => {
    const {params,response} = ctx;
    const id = Number(params.idPeriod);
    try{
        const res = await periodsService.desactivePeriod(id);
        response.status = 204
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}



export {
    getPeriods,
    getPeriod,
    addPeriod,
    desactivePeriod,
    updatePeriod
} 

