export * as helperHttps from './http/index.ts'; 

export const generateCode = (prefijo:string,name:string) => {
    const spltiName = name.split(/[\s_-]/);
    let code = "";
    spltiName.forEach(s => {
        if(s.length <5){
            code += s;
        }else{
            code += s.slice(0,5);
        }
    });
    return `${prefijo.toUpperCase()}_${code.toUpperCase()}`;
}

