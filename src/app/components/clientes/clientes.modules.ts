import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteFormModule } from './cliente-form/cliente-form.modules';
import { ClienteListModule } from './cliente-list/cliente-list.modules';




@NgModule({
  imports:[
    ClienteListModule,
    ClienteFormModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ClientesModule { }
