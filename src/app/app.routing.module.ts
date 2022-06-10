import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'
import { ClienteListComponent } from "./clientes/cliente-list/cliente-list.component";

const routes: Routes = [
    {
        path: 'api/clientes',
        component: ClienteListComponent

    }

]


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{}