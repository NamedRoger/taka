import {Context} from "https://deno.land/x/oak/mod.ts";
import {verify,decode}  from "https://deno.land/x/djwt@v2.2/mod.ts";
import {unauthorized} from '../helpers/http/index.ts'

export const auth = async (ctx:Context,next:any,...roles:string[]) => {
    const {request,response} = ctx;
    if(!request.headers.has('Authorization')) return unauthorized(ctx);
    
    const headerAuth = request.headers.get('Authorization') || '';
    const [type,token] = headerAuth.split(" ");
    try{
        const resultVerify = await verify(token,"llave","HS256");
        await next();
    }catch(e){
        return unauthorized(ctx);
    }

}

const authorization = (token:string,roles:string[]) => {
    const [header,payload,signature] = decode(token);
    console.log(payload,signature,header);
}

const userPayload = (token:string) => {
    const userInfo = decode(token);
    return userInfo;
}