import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ec-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  step: String | undefined
  
  constructor(
    private activatedRoute: ActivatedRoute
  ) {
   }

  ngOnInit(): void {
    this.step = this.activatedRoute.routeConfig?.path
  }

}
