import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ClienteListComponent } from "./cliente-list.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { LoadButtonComponent } from "./load-button/load-button.component";

@NgModule({
    declarations: [
        ClienteListComponent,
        ClientesComponent,
        LoadButtonComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class ClienteListModule{}