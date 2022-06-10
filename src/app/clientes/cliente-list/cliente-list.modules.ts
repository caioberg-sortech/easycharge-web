import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ClienteListComponent } from "./cliente-list.component";
import { ClientesComponent } from "./clientes/clientes.component";

@NgModule({
    declarations: [
        ClienteListComponent,
        ClientesComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule
    ]
})
export class ClienteListModule{}