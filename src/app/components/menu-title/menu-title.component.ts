import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  standalone: true,
  imports: [],
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css', './menu-title.responsive.component.css']
})
export class MenuTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Method not implemented.');
  }

}
