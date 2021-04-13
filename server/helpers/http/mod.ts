import { Context,Status } from "https://deno.land/x/oak/mod.ts";

export function notFound(ctx: Context, message = "No se encontró el recurso") {
    ctx.response.status = Status.NotFound;
    ctx.response.body = message;
}

export function ok() {

}

export function noContent(ctx:Context) {
    ctx.response.status = Status.NoContent;
}

export function badRequest(ctx: Context, message = "Error al solicitar") {
    ctx.response.status = Status.BadRequest;
    ctx.response.body = {
        error: message
    }
}

export function unauthorized(ctx: Context, message = "Sin acceso") {
    const { response } = ctx;
    response.status = 401;
    response.body = {
        error: message
    }
}