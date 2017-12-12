import { Injectable } from "@angular/core";
import { HttpModule, Http } from '@angular/http';
import {clientes} from '../mock/clientes';
import {cliente} from '../mock/cliente';
import {pontos} from '../mock/pontos';

@Injectable()
export class ClienteService {
  
  constructor(public http: Http) {
    console.info('asdf',clientes)
  }
  
  getClientes ():Promise<any>{
    return new Promise( (resolve) => resolve(clientes) );
  }
  getCliente (id):Promise<any>{
    return new Promise( (resolve) => resolve(cliente) );
  }
  getPontos (id):Promise<any>{
    return new Promise( (resolve) => resolve(pontos) );
  }
}