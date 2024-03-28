import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../../data/dataFake';

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
  private id: string | null = "0"

  constructor(
    private route: ActivatedRoute
  ){ }
  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }

}
