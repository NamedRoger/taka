import { unauthorized } from '../helpers/http/mod.ts'
import { auth } from '../consts.ts';
import { Context, Request, validateJWT, verifyJWT, decode } from '../deps.ts'


export const userMiddleware = async (ctx: Context, next: CallableFunction) => {
    const { request, response } = ctx;
    const token = getToken(request);
    console.log(token);
    if (token) {
        try {
            const resultVerify = await verifyJWT(token, auth.key, "HS256");
            const [header, payload, signature] = decode(token);
            ctx.state.user = payload;
            await next();
        } catch (e) {
            ctx.state.user = null;
            return unauthorized(ctx);
        }
    } else {
        ctx.state.user = null;
        await next();
    }

}

export const authetincation = async (ctx: Context, next: CallableFunction) => {
    const { request, response } = ctx;
    if (ctx.state.user) {
        await next();
    } else {
        return unauthorized(ctx);
    }
}

export const authorization = async (cxt: Context, next: CallableFunction, ...roles: string[]) => {
    const { request } = cxt;
    const user = cxt.state.user;
    if (!roles.includes(user.role)) return unauthorized(cxt, "No tienes acceso a este recurso");
    await next();
}

const getToken = (request: Request) => {
    const headerAuth = request.headers.get('Authorization') || '';
    const [type, token] = headerAuth.split(" ");
    return token;
}
