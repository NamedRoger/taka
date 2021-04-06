import {Context,Request} from "https://deno.land/x/oak/mod.ts";
import {verify,decode}  from "https://deno.land/x/djwt@v2.2/mod.ts";
import {unauthorized} from '../helpers/http/index.ts'
import {auth} from '../consts.ts';

export const authetincation = async (ctx:Context,next:CallableFunction) => {
    const {request,response} = ctx;
    if(!request.headers.has('Authorization')) return unauthorized(ctx);
    
    const token = getToken(request);
    try{
        const resultVerify = await verify(token,auth.key,"HS256");
        const [header,payload,signature] = decode(token);
        
        await next();
    }catch(e){
        return unauthorized(ctx);
    }

}

export const authorization = async (cxt:Context,next:any,...roles:string[]) => {
    const {request} = cxt;
    const token = getToken(request);
    const resultVerify = await verify(token,auth.key,"HS256");
    const [header,payload,signature] = decode(token);
    const user:any = payload;
    if(!roles.includes(user.role)) return unauthorized(cxt,"No tienes acceso a este recurso");
    await next();
}

const getToken = (request:Request) => {
    const headerAuth = request.headers.get('Authorization') || '';
    const [type,token] = headerAuth.split(" ");
    return token;
}
