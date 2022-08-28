import { Component } from '@angular/core';
interface cardPrueba {
  title: string;
  description: string;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Miler samuel falond diaz';
  public listCard: cardPrueba[] = [];
  ngOnInit(): void{
    this.listCard = [
      {title:"Dracula", description: "Pelicula con mejor animacion"},
      {title:"Titanic", description: "Ganadora de 1 oscar"}
    ]
  }
}
