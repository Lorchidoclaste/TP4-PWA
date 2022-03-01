import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Convertisseur';
  tabs : any = [{label: "Convertisseur poids", link: "/a"}, {label: "Convertisseur température", link: "/b"}]
}


