import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../../app.routing.module";

import { HeaderComponent } from "./header.component";

@NgModule({
    declarations:[
        HeaderComponent
    ],
    imports:[
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports:[
        HeaderComponent
    ]
})
export class HeaderModule{}