import { NgModule } from '@angular/core';

import { ListaClienteComponent } from './listaCliente/listaCliente.component';


@NgModule({
  declarations: [
    ListaClienteComponent
  ],
  exports: [ListaClienteComponent]
})
export class ClientesModule { }
