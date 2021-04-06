import { Specialty } from '../models/speciality.ts';
import * as specialtyService from '../services/specialties/specialtieService.ts';
import { generateCode } from '../../../helpers/index.ts';

const addSpecialty = async ({ request,response }: {request:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newSpecialty: Specialty = await body.value;
    newSpecialty.active = true;
    newSpecialty.code = generateCode("ESP",newSpecialty.name);
    try{
        const res = await specialtyService.addSpecialty(newSpecialty);
        response.status = 201;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.boy = {
            error:e.message
        }
    }

}

const desactiveSpecialty = async ({params, response }:{ params:any,response: any }) => {
    try{
        const res = await specialtyService.desactiveSpecialty(Number(params.idSpeciality));
        response.status = 204;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}

const getSpecialties = async ({ response }: { response: any }) => {
    try{
        const specialties = await specialtyService.getSpecialties();

        response.status = 200;
        response.body = specialties;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        };
    }
}
const getSpecialtie = async ({params, response }:{ params:any,response: any }) => {
    try{
        const res:Specialty = await specialtyService.getSpecialtyById(Number(params.speciality));

        response.status = 200;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
}

const updateSpecialty = async ({ request,params,response }: {request:any,params:any, response: any }) => {
    const body = await request.body({type:"json"});
    const newDataSpecialty:Specialty = await body.value;
    newDataSpecialty.idSpecialty =  Number(params.idSpeciality);
    newDataSpecialty.code = generateCode("ESP",newDataSpecialty.name);
    try{
        const res = await specialtyService.updateSpecialty(newDataSpecialty);
        response.status = 204;
        response.body = res;
    }catch(e){
        response.status = 400;
        response.body = {
            error:e.message
        }
    }
    
}



export {
    getSpecialtie,
    getSpecialties,
    addSpecialty,
    desactiveSpecialty,
    updateSpecialty
} 

