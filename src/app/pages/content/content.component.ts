import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2019/12/15/iron-man.jpg"
  contentTitle: string = "NOTICIA EXEMPLO"
  contentDescription: string = "bla bla bla bla"
  ngOnInit(): void {
    console.log('Method not implemented.');
  }

}