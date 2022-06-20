import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ClienteForm } from 'src/app/model/clienteForm';
import { ClienteService } from 'src/app/service/cliente.service';


@Component({
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  clienteForm: FormGroup;
  
  constructor(private formbuilder: FormBuilder, private clienteService: ClienteService, private router: Router) {
    this.clienteForm = formbuilder.group({
      nome: ['',[Validators.required, Validators.maxLength(255)]],
      cpf: [''],
      telefone: [''],
      email: [''],
      rua: [''],
      numero: [''],
      complemento: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      profissao: [''],
      renda: [''],
      status: ['']
    })
  }

  ngOnInit(): void {} 

  cadastro(){
    const cliente: ClienteForm = this.clienteForm.getRawValue();
    console.log(cliente)

    this.clienteService.salvaCliente(cliente)
      .subscribe(() => {
        this.router.navigate(['clientes/lista'])
      })
    
  }

}
