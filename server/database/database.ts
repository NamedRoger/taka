import { Client } from "https://deno.land/x/mysql/mod.ts";

class Database {

  private connection:Client|undefined;

  constructor(){
    this.createConnection();
  }

  public async createConnection(){
    const client = await new Client().connect({
      hostname: Deno.env.get('DATABASE_HOST'),
      username: Deno.env.get('DATABASE_USER'),
      db: Deno.env.get('DATABASE_DB'),
      password:  Deno.env.get('DATABASE_PASSWORD'),
    });
    this.connection = client;
  }

  getConnection(){
    return this.connection;
  }

  public async query(query:string,paramas:[] = []){
    let result
    if(this.connection !== undefined){
      if(paramas.length > 0){
        result = await this.connection.query(query,paramas) ;
      }else{
        result = await this.connection.query(query);
      }
      return result;
    }else{
      throw new Error("no existe la conección");
    }
    
  }

  public async execute(query:string, params:[]){
      if(this.connection === undefined) throw new Error("No existe la conexion");

      const result = await this.connection.execute(query,params);

      return result;
  }
}

export default new Database();