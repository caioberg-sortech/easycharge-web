import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { PaginaClientes } from "src/app/model/pagina-clientes";
import { ClienteService } from "src/app/service/cliente.service";


@Injectable({providedIn: 'root'})
export class ClienteListResolver implements Resolve<Observable<PaginaClientes>>{

    constructor(private service: ClienteService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PaginaClientes> {

        return this.service.listCliente(0)
    }
}