import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginaClientes } from 'src/app/model/pagina-clientes';

import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'ec-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit, OnChanges {

  clientes: Cliente[] = []
  currentPage: number = 0
  hasMore = true

  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.clientes = this.activatedRoute.snapshot.data['clientes']['content']
  
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['clientes']){
      
    }
  }

  load() {
    this.clienteService
      .listCliente(++this.currentPage)
      .subscribe((clientes):void => { 
        this.clientes = this.clientes.concat(clientes.content)
        if(!clientes.content.length){
          this.hasMore = false;
        }
      })     
  }

  atualizaLista(){
    console.log('teste');
    
    this.clienteService.listCliente(0)
    .subscribe(clientes => this.clientes = clientes.content)
  }
}
