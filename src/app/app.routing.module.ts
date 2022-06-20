import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'

import { ClienteFormComponent } from "./components/clientes/cliente-form/cliente-form.component";
import { ClienteListComponent } from "./components/clientes/cliente-list/cliente-list.component";
import { ClienteListResolver } from "./components/clientes/cliente-list/cliente-list.resolver";



const routes: Routes = [
    {
        path: 'clientes/lista',
        component: ClienteListComponent,
        resolve: {
            clientes: ClienteListResolver
        }
    },
    {
        path: 'clientes/formulario',
        component: ClienteFormComponent
    }
]


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{}