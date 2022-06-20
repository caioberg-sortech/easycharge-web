import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClienteFormComponent } from './cliente-form.component';

@NgModule({
    declarations: [ ClienteFormComponent ],
    imports: [ 
        CommonModule, 
        ReactiveFormsModule,
        RouterModule,
        FormsModule
    ]
})
export class ClienteFormModule { }