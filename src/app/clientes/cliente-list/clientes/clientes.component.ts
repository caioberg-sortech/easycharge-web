import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from '../../../model/cliente';

@Component({
  selector: 'ec-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  @Input() clientes: Cliente[] = []

  @Output() atualiza = new EventEmitter()

  constructor(
    private clienteService: ClienteService){
    
   }
  
  removeCliente(id:number){
    this.clienteService.removeCliente(id)
    .subscribe(() => this.atualiza.emit(true))
    
  }
}
