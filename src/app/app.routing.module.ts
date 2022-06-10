import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'
import { ClienteListComponent } from "./clientes/cliente-list/cliente-list.component";
import { ClienteListResolver } from "./clientes/cliente-list/cliente-list.resolver";

const routes: Routes = [
    {
        path: 'clientes/lista',
        component: ClienteListComponent,
        resolve: {
            clientes: ClienteListResolver
        }

    }

]


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{}