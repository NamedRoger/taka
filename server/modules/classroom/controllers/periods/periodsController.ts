import { IPeriod } from '../../models/period.ts';
import * as periodsService from '../../services/periods/periodsService.ts';

const getPeriods = async ({request,response}:{request:any,response:any}) => {
    const periods = await periodsService.getPeriods();
    response.body = periods;
}

const getPeriod = async ({request,response,params}:{request:any,response:any,params:any}) => {
    const id = Number(params.idPeriod);
    try{
        const period = await periodsService.getPeriodById(id);
        if(period === undefined || period === null) ;
    }catch(e){
    }
}

const addPeriod = async ({request,response}:{request:any,response:any}) => {

}

const updatePeriod = async ({request,response,params}:{request:any,response:any,params:any}) => {

}

const desactivePeriod = async ({request,response,params}:{request:any,response:any,params:any}) => {

}



export {
    getPeriods,
    getPeriod,
    addPeriod,
    desactivePeriod,
    updatePeriod
} 

