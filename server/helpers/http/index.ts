import { Context,Status } from "https://deno.land/x/oak/mod.ts";


export function notFound (ctx:Context ){
    ctx.response.status = Status.NotFound;
}

export function ok(){

}

export function noContent(){

}

export function badRequest(){
    
}