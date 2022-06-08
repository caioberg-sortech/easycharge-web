import { Component } from '@angular/core';

@Component({
  selector: 'ec-lista',
  templateUrl: './listaCliente.component.html',
  styleUrls: ['./listaCliente.component.css']
})
export class ListaClienteComponent {
    clientes = 
    [
      {
        "nome": "Yasmin Ester Lara Nogueira",
        "cpf": "040.141.961-43",
        "telefone": "(61) 98439-7036",
        "email": "yasminesternogueira@munhozengenharia.com.br",
        "rua": "Quadra QS 20 Conjunto 2",
        "numero": 669,
        "complemento": "ap 175",
        "bairro": "Riacho Fundo II",
        "cidade": "Brasília",
        "estado": "DF",
        "profissao": "Engenheira",
        "renda": 9168,
        "status": "ATIVO"
      },
      {
        "nome": "Marlene Valentina da Paz",
        "cpf": "296.303.821-64",
        "telefone": "(61) 99744-3053",
        "email": "marlenevalentinadapaz@gmapst.com",
        "rua": "Quadra CL 301 Bloco B",
        "numero": 291,
        "bairro": "Santa Maria",
        "cidade": "Brasília",
        "estado": "DF",
        "profissao": "Geóloga",
        "renda": 7393,
        "status": "ATIVO"
      },
      {
        "nome": "Carla Jaqueline Daniela Teixeira",
        "cpf": "593.015.361-29",
        "telefone": "(61) 98720-4156",
        "email": "carla-teixeira88@platinium.com.br",
        "rua": "Quadra AOS 8",
        "numero": 703,
        "bairro": "Área Octogonal",
        "cidade": "Brasília",
        "estado": "DF",
        "profissao": "Gestora Financeira",
        "renda": 15425,
        "status": "ATIVO"
      },
      {
        "nome": "Carlos Renato Benício Ferreira",
        "cpf": "434.475.011-03",
        "telefone": "(61) 98110-2681",
        "email": "carlosrenatoferreira@tjam.jus.br",
        "rua": "Quadra QS 11 Conjunto G",
        "numero": 202,
        "complemento": "AP 134",
        "bairro": "Areal (Águas Claras)",
        "cidade": "Brasília",
        "estado": "DF",
        "profissao": "Servidor Público",
        "renda": 19112,
        "status": "ATIVO"
      },
      {
        "nome": "Isabel Sônia Ramos",
        "cpf": "066.651.591-32",
        "telefone": "(61) 98341-1522",
        "email": "isabel-ramos96@zipmail.com",
        "rua": "Residencial Vitória Rua 3",
        "numero": 756,
        "bairro": "Residencial Vitória (São Sebastião)",
        "cidade": "Brasília",
        "estado": "DF",
        "profissao": "Servidora Pública",
        "renda": 12024,
        "status": "ATIVO"
      },
      {
        "nome": "Pietro Henry Felipe Dias",
        "cpf": "868.069.031-77",
        "telefone": "(61) 98686-3695",
        "email": "pietro-dias73@raioazul.com.br",
        "rua": "Quadra SHIGS 712 Bloco M",
        "numero": 575,
        "complemento": "APTO D 308",
        "bairro": "Asa Sul",
        "cidade": "Brasília",
        "estado": "DF",
        "profissao": "Empresário",
        "renda": 17510,
        "status": "SUSPENSO"
      },
      {
        "nome": "Diego Pedro Henrique Nascimento",
        "cpf": "671.747.389-40",
        "telefone": "(47) 98804-9671",
        "email": "diego_nascimento@metroquali.com.br",
        "rua": "Rua Mathilde Drefahl",
        "numero": 143,
        "complemento": "ap e-306",
        "bairro": "Floresta",
        "cidade": "Joinville",
        "estado": "SC",
        "profissao": "Jornalista",
        "renda": 12774,
        "status": "ATIVO"
      },
      {
        "nome": "Emily Vera Marcela Silveira",
        "cpf": "637.504.219-43",
        "telefone": "(71) 99957-8435",
        "email": "emily.vera.silveira@trimempresas.com.br",
        "rua": "Rua San Martins",
        "numero": 741,
        "bairro": "Santo Antônio",
        "cidade": "Candeias",
        "estado": "BA",
        "profissao": "Empresária",
        "renda": 10258,
        "status": "ATIVO"
      },
      {
        "nome": "Osvaldo Nicolas Isaac Corte Real",
        "cpf": "923.397.282-82",
        "telefone": "(63) 99189-9262",
        "email": "osvaldonicolascortereal@academiagolf.com.br",
        "rua": "Rua 8",
        "numero": 508,
        "bairro": "Jardim Santa Bárbara",
        "cidade": "Palmas",
        "estado": "TO",
        "profissao": "Empresário",
        "renda": 8471,
        "status": "ATIVO"
      },
      {
        "nome": "César Ryan Fernandes",
        "cpf": "625.882.388-23",
        "telefone": "(53) 99962-1753",
        "email": "cesar_fernandes@vipsaude.com.br",
        "rua": "Rua Cento e Sessenta e Oito",
        "numero": 507,
        "bairro": "Vila São Jorge",
        "cidade": "Rio Grande",
        "estado": "RS",
        "profissao": "Enfermeiro",
        "renda": 4099,
        "status": "ATIVO"
      },
      {
        "nome": "Sabrina Malu Silva",
        "cpf": "096.855.962-04",
        "telefone": "(86) 98135-1648",
        "email": "sabrina-silva89@mx.labinal.com",
        "rua": "Rua Domingos Dias da Silva",
        "numero": 280,
        "bairro": "Conselheiro Alberto Silva",
        "cidade": "Parnaíba",
        "estado": "PI",
        "profissao": "Médica",
        "renda": 16509,
        "status": "SUSPENSO"
      },
      {
        "nome": "Elaine Caroline Pires",
        "cpf": "413.593.224-00",
        "telefone": "(54) 99538-6923",
        "email": "elaine-pires70@dye.com.br",
        "rua": "Rua José Carvalho Belardinelli",
        "numero": 125,
        "complemento": "apto. 22",
        "bairro": "São José",
        "cidade": "Caxias do Sul",
        "estado": "RS",
        "profissao": "Empresária",
        "renda": 19274,
        "status": "SUSPENSO"
      }
    ]
}