import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public routingData:any=[
    {
      link:'test1',
      lable:'Test-1'
    },
    {
      link:'test2',
      lable:'Test-2'
    },
  ]

  constructor(){}
}
