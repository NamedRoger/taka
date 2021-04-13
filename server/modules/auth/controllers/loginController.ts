import {getUserLogin} from '../services/loginService.ts';
import {Login} from '../models/mod.ts';
import {auth} from '../../../consts.ts';
import {RouterContext,Header,create,getNumericDate,verifyCrypt,hash,Payload} from '../../../deps.ts';


const login = async (ctx:RouterContext) => {
    const {request,response} = ctx;
    const body =  request.body({type:"json"});
    const logingModel:Login = await body.value;
    try{
        const user = await getUserLogin(logingModel);
        if(user === null || user === undefined){
            response.status = 400;
            response.body = {
                error:"no existe el usuario"
            }
        }else{
            if((await verifyCrypt(logingModel.password,user.password))){
                const token = await createToken(user.username,user.role);
                response.status = 200;
                response.body = {
                    token:token
                }
            }else{
                response.status = 400;
                response.body = {
                    error:"el password no es el correcto"
                }
            }
        }
    
    }catch(e){
        response.status = 400;
        response.body = {
            error: e.message
        }
    }
}

const createToken = async (username:string,role:string):Promise<string> => {
   const header:Header = {alg:"HS256"};
   
   const payload:Payload = {
       iss:"taka",
       username:username,
       role:role,
       exp:getNumericDate(60*60*24)
   }
   return await create(header,payload,auth.key);
}

const logut = async () => {

}

export {
    login,
    logut
}