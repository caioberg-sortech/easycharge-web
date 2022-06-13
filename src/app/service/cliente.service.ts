import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { PaginaClientes } from "../model/pagina-clientes";

const API = 'http://localhost:8080/api/clientes'

@Injectable({providedIn: 'root'})
export class ClienteService{
    
    
    constructor(private http: HttpClient){}

    listCliente(page: number){
        const params = new HttpParams()
        .append('page', page.toString())

        return this.http
        .get<PaginaClientes>(API,{params})
    }

    removeCliente(clienteId: number){
        return this.http.delete(API + '/' + clienteId)
    }
}