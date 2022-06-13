import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, retry, throwError } from "rxjs";
import { Cliente } from "../model/cliente";

import { PaginaClientes } from "../model/pagina-clientes";



@Injectable({providedIn: 'root'})
export class ClienteService{

    private API = 'http://localhost:8080/api/clientes'
    
    constructor(private http: HttpClient){}

    listCliente(page: number){
        const params = new HttpParams()
        .append('page', page.toString())

        return this.http
        .get<PaginaClientes>(this.API,{params})
        .pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    removeCliente(clienteId: number){
        return this.http.delete(this.API + '/' + clienteId)
    }

    atulizaStatus(clienteId: number){
        return this.http.put(`${this.API}/status/${clienteId}`, 1)
      .pipe(
          retry(1),
          catchError(this.handleError))
    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        } else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
        }
        alert(errorMessage);
        return throwError(() => new Error(errorMessage));
    };
}