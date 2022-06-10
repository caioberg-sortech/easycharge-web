import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginaClientes } from 'src/app/model/pagina-clientes';

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
  hasMore = true



  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.clientes = this.activatedRoute.snapshot.data['clientes']['content']
  
  }

  load() {
    this.clienteService
      .listCliente(++this.currentPage)
      .subscribe(clientes => this.clientes = clientes.content)
        
        /*photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if(!photos.length) this.hasMore = false;*/
  }

}
