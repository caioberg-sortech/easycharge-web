import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'ec-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[] = []
  currentPage: number = 0


  constructor(
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.clienteService
    .listCliente(this.currentPage)
    .subscribe(clientes => this.clientes = clientes.content)

    console.log(this.clientes);
    
  }

}
