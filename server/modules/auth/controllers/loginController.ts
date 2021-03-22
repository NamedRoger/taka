import * as userService from '../services/users/userServices.ts';
import {Login,User} from '../models/index.ts';
import {hash,verify} from "https://deno.land/x/scrypt/mod.ts";
import {Header,Payload,create,getNumericDate} from "https://deno.land/x/djwt@v2.2/mod.ts";



const createToken = async (ctx:any) => {
    const {response,request}:{response:any,request:any} = ctx;
    const body = await request.body({type:"json"});
    const loginModel:Login = await body.value;
    const user:User = await userService.getUserLogin(loginModel);
    if(user === null || user === undefined){
        response.body = {
            error:"no existe el usuario"
        }
    }else{
        if(user.password !== undefined){
            if(!(await verify(user.password,loginModel.password))){
                response.body = {
                    error:"la contraseña es incorrecta"
                }   
            }else{
                const header:Header = {
                    alg:"HS256",
                }

                const playload = {
                    exp:getNumericDate(60*60),
                    username:loginModel.username,
                    rol:user.rol,
                    
                }
            }
        }
    }
}

const logut = async () => {

}

export {
    createToken,
    logut
}