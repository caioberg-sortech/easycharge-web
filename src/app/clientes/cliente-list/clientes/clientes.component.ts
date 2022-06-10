import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../../../model/cliente';

@Component({
  selector: 'ec-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  @Input() clientes: Cliente[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
